# Hand-port the Kotlin logic to TypeScript, with the Android tests as the reference

The 55 pure `*Logic.kt` files and their 575 JVM tests are ported by hand to TypeScript and Vitest. The ported tests, with their expected values unchanged, define correct behaviour; a port is done when they pass. We rejected compiling the Kotlin to JS (Kotlin Multiplatform) because it would force a restructure of the Android repository and ship a larger bundle, for logic that is small per file.

## Consequences

Android logic changes reach webOS only through parity sync tasks (ADR 0006); there is no shared code to keep the two in step automatically.
