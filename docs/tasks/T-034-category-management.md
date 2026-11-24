# T-034 Category order, hidden, ignored, private and favourite categories

**Status:** ready-for-agent  
**Issue:** #34  
**Milestone:** M3 Main UI

## What to build

Port category management logic and its on-TV menus: order, hide, ignore groups, private categories, favourite categories, group search.

## Acceptance criteria

- [ ] Ported tests pass.
- [ ] Prefs keys equal Android.

## Android reference (1.4.8, pinned to `f4a0360`)

- [`CatOrder.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/CatOrder.kt)
- [`CatOrderLogic.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/CatOrderLogic.kt)
- [`HiddenCats.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/HiddenCats.kt)
- [`IgnoredGroups.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/IgnoredGroups.kt)
- [`PrivateCats.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/PrivateCats.kt)
- [`PrivateLogic.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/PrivateLogic.kt)
- [`CatFavs.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/CatFavs.kt)
- [`GroupSearch.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/main/java/com/ipvio/stream/GroupSearch.kt)

## Android tests to port

- [`CatOrderLogicTest.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/test/java/com/ipvio/stream/CatOrderLogicTest.kt)
- [`PrivateLogicTest.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/test/java/com/ipvio/stream/PrivateLogicTest.kt)
- [`GroupSearchTest.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/test/java/com/ipvio/stream/GroupSearchTest.kt)
- [`StalkerCategoryTest.kt`](https://github.com/MusaAliji/IPVIO-Stream/blob/f4a0360/app/src/test/java/com/ipvio/stream/StalkerCategoryTest.kt) (category parts)

## Risks

Low.

## Blocked by

- #31 (T-031) Movies and Series: browse, categories, filters, automatic genres
- #33 (T-033) Live TV tab

## Test results

_Filled in by the PR: checks run, device test on the 55UR80._
