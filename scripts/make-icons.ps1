# Generates the webOS app icons and splash image from the Android launcher icon.
#
# Source: Android IPVIO Stream 1.4.8 (f4a0360), app/src/main/res/drawable/ic_logo_fg.png,
# the foreground of the adaptive launcher icon (mipmap-anydpi-v26/ic_launcher.xml) on the
# background colour #01040E (drawable/ic_launcher_background.xml).
#
# Outputs (public/, copied into dist/ by Vite):
#   icon.png       80x80    appinfo "icon"
#   largeIcon.png  130x130  appinfo "largeIcon"
#   splash.png     1920x1080 appinfo "splashBackground"
#
# Usage: pwsh scripts/make-icons.ps1 [-AndroidRepo "D:\Projects\IPVIO Stream"]
param(
    [string]$AndroidRepo = "D:\Projects\IPVIO Stream"
)

$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing

$src = Join-Path $AndroidRepo 'app/src/main/res/drawable/ic_logo_fg.png'
$out = Join-Path $PSScriptRoot '../public'
$background = [System.Drawing.ColorTranslator]::FromHtml('#01040E')

$logo = [System.Drawing.Image]::FromFile((Resolve-Path $src))
try {
    # Adaptive icons show the inner 72dp of the 108dp layer; crop to that area.
    $safe = [int]($logo.Width * 72 / 108)
    $offset = [int](($logo.Width - $safe) / 2)
    $crop = New-Object System.Drawing.Rectangle $offset, $offset, $safe, $safe

    function Save-Image([int]$width, [int]$height, [scriptblock]$draw, [string]$name) {
        $bmp = New-Object System.Drawing.Bitmap $width, $height
        $g = [System.Drawing.Graphics]::FromImage($bmp)
        try {
            $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
            $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
            $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
            $g.Clear($background)
            & $draw $g
            $bmp.Save((Join-Path $out $name), [System.Drawing.Imaging.ImageFormat]::Png)
        }
        finally {
            $g.Dispose()
            $bmp.Dispose()
        }
    }

    foreach ($icon in @(@{ Size = 80; Name = 'icon.png' }, @{ Size = 130; Name = 'largeIcon.png' })) {
        $size = $icon.Size
        Save-Image $size $size {
            param($g)
            $g.DrawImage($logo, (New-Object System.Drawing.Rectangle 0, 0, $size, $size), $crop, [System.Drawing.GraphicsUnit]::Pixel)
        } $icon.Name
    }

    # Splash: the full logo layer at its native size, centred on the background colour.
    Save-Image 1920 1080 {
        param($g)
        $x = [int]((1920 - $logo.Width) / 2)
        $y = [int]((1080 - $logo.Height) / 2)
        $g.DrawImage($logo, $x, $y, $logo.Width, $logo.Height)
    } 'splash.png'
}
finally {
    $logo.Dispose()
}
