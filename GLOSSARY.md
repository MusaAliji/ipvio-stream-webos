# IPVIO Stream for webOS

An IPTV player for LG TVs that is a port of the IPVIO Stream Android TV app. The words below are the ones the app, its docs and its tasks use; the same words mean the same things on Android.

## Content

**Playlist**:
One provider subscription the user added to the app, of one source type.
_Avoid_: list, subscription, source, account

**Source type**:
The way a playlist is read: M3U (a playlist URL or file), Xtream (server, user name and password) or Stalker (portal address and MAC address).
_Avoid_: provider type, protocol

**Backup server**:
An alternative address for an Xtream playlist, used when the main server fails.
_Avoid_: failover host, mirror

**Also show**:
Combining several playlists so their content appears together, each title once.
_Avoid_: merge, multi-playlist

**Item**:
One playable or browsable thing from a playlist: a channel, a movie, a series or an episode.
_Avoid_: stream, entry, content

**Item id**:
The identity of an item that favourites, history and positions refer to; identical to the Android app's for the same item.
_Avoid_: hash, key

**Variant**:
Another copy of the same title or channel, from another playlist or in another quality.
_Avoid_: duplicate, alternative stream

**Category**:
A group of items as the provider delivers it (for example "Sports HD").
_Avoid_: group, folder, genre

**Genre**:
The kind of film or show (drama, comedy …), from the metadata or assigned automatically; independent of categories.
_Avoid_: category

**Hidden category**:
A category the user removed from view.

**Ignored group**:
A category that is skipped when the playlist is read.

**Private category**:
A category shown only after unlocking.

## Library

**Favourites**:
Channels, movies and series the user marked with the heart.
_Avoid_: favorites list, starred

**My list**:
Movies and series the user wants to watch later (bookmark); never live channels.
_Avoid_: watchlist, favourites

**History**:
What was watched recently (clock).
_Avoid_: recents, recently played

**Continue watching**:
Movies and episodes started but not finished.
_Avoid_: resume list

**Profile**:
One person's separate history, favourites and settings on the same TV ("Who's watching?").
_Avoid_: user, account

**Parental control**:
PIN protection for content and settings.

**Boomer mode**:
A simplified home screen with large, few choices.

## TV

**TV guide**:
The programme schedule of live channels; also called EPG in settings and code.
_Avoid_: program guide, schedule

**Now and next**:
The current and the following programme of a channel.

**Catch-up**:
Watching a past programme that the provider keeps (from the beginning or from the archive).
_Avoid_: timeshift, replay

**Live rewind**:
Pausing and rewinding the running channel from a buffer on the TV itself, not from the provider.
_Avoid_: timeshift, catch-up

**Recording**:
Saving the running programme on the TV or a USB stick.

**Reminder**:
A note that fires when a chosen programme starts.

**Dual view**:
A second channel in a small window or side by side with the first.
_Avoid_: picture-in-picture (that is the system feature)

**Multi view**:
Several channels as tiles at once.

**Sports hub**:
The sports area: games on now and coming up, tables and sports channels.

## Phone and data

**Phone remote**:
The phone web page that controls the TV app on the same Wi-Fi after scanning a QR code.
_Avoid_: companion app, mobile remote

**Access code**:
The 4-digit code that pairs a phone with the TV app.
_Avoid_: PIN (that is parental control)

**Quick setup**:
Sending a playlist (link, Xtream login or file) from the phone to the TV.

**Backup**:
A file with settings, library and playlists that can be restored on any IPVIO Stream app, Android or webOS.
_Avoid_: export

**Transfer**:
Moving a backup from one TV to another over Wi-Fi.

**Live sync**:
Favourites and history following the user between devices through their own Google Drive.
_Avoid_: cloud sync, Drive backup

## Porting

**Reference version**:
The Android IPVIO Stream release the port must match (currently 1.4.8).

**Parity**:
The webOS app looking and behaving like the reference version.

**Gap**:
A difference from the reference version that is recorded with a reason and a status: removed, replaced, partial or pending.
_Avoid_: missing feature, limitation

**Parity sync**:
Bringing a newer Android release into the webOS app and moving the reference version forward.

**Spike**:
A time-boxed experiment on a real TV that ends in a written go / no-go.
_Avoid_: POC, prototype
