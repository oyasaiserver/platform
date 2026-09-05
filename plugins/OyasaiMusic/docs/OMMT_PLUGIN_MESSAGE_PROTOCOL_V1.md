# OMMT <-> OyasaiMusic packet interoperation contract

Status: **frozen implementation target**  
Contract version: **9**  
Wire protocol version: **1**

## Scope, targets and authority

OMMT is an Oyasai Server-only Fabric editor. The only channels are
oyasaimusic:upload_v1 and oyasaimusic:playback_v1. Legacy command/chat ACK transport
is unsupported. The maintained target is Minecraft 26.2 on Java 25. The only Plugin
source authority is platform/plugins/OyasaiMusic; legacy root OyasaiMusic and
MainOyasaiMusic are not implementation targets.

Paper derives identity solely from its connected Player, verifies permissions and
ownership, validates all bytes and owns persistence, catalog resolution and playback
routing. Client UUID, name, permission, pack status and success claims are never
authoritative. Bukkit/Paper calls run on the game thread; validation, compression and
I/O may run off-thread but must be connection-generation-bound.

Velocity is a stateless raw relay for the OMMT upload/playback channels only between a
player and logical backend main (minecraft-main is a container/address name). It does
not parse, authorize, hash, buffer, reassemble, persist, route or log OMMT payload
bodies. The bounded Bedrock pack-control channel is the sole exception and retains only
per-player pack flags in memory. Bedrock/Floodgate recipients are never buffered
recipients and use ordinary Paper playback.

Every payload is exactly big-endian:
u8 protocolVersion=1, u8 type, UUID sessionId (16 bytes), body.
Exact EOF is required and packets are 18..24576 bytes. Unknown type/version,
malformed UTF, invalid enum/range, non-canonical varint, bad hash, excess body,
conflicting duplicate, reverse order, expired session or stale connection generation
fails closed with no chat echo or data mutation.

## upload_v1: retained byte-for-byte

The client checks canSend(upload_v1), sends no song body when unavailable, sends a
UUID-only REQUEST, and waits for Paper READY before BEGIN/CHUNK/FINISH.

| Type | Direction | Body |
|---:|---|---|
| 1 REQUEST | C2S | empty |
| 2 BEGIN | C2S | u16 chunks,u32 compressed,u32 transport,u32 oymi,u32 notes,sha256[32] |
| 3 CHUNK | C2S | u16 sequence,u16 total,u16 length,bytes[length] |
| 4 FINISH | C2S | sha256[32] |
| 5 ABORT | C2S | u8 reason |
| 64 READY | S2C | u32 caps,u32 maxOymi,u32 maxCompressed,u16 maxChunks,u16 chunkBytes |
| 65 STATUS | S2C | u8 status,modified-UTF detail<=64 ASCII |

READY is Player+UUID-specific, valid ten seconds and consumed by the first valid BEGIN.
Upload capability bits remain compact-zlib=1, custom-sound=2,
custom-sound-pattern=4 and oymi-v4-pitch-cents=8. Limits remain: compressed/inflated
OYMC <=1 MiB, OYMI 20..1048576 bytes, 1..100000 notes, 1..64 chunks, 20480 bytes per
non-final chunk and <=2 chunks/client end tick. Paper validates manifest, strict
zero-based order, bounded zlib without trailing bytes, OYMC exact EOF and authoritative
26.2 catalog before persistence. Player+UUID+manifest is idempotent for ten minutes;
conflicting duplicates fail closed.

## Playback discovery, capabilities and message types

Paper probes only at the first eligible playback after join/reload. It sends PROBE,
resolves a monotonic three-second deadline on the first subsequent main tick and records
UNKNOWN -> MOD_PRESENT after a valid reply or UNKNOWN -> VANILLA_ONLY on timeout until
quit, reconnect, reload or disable. Clients never announce on join. Disconnect and
reload invalidate the generation. VANILLA_ONLY, timeout and channel absence use ordinary
Paper playback.

Existing types are byte-stable: S2C 1..7 are PROBE, BEGIN, CHUNK, START, PAUSE, RESUME,
STOP; C2S type 8 PROBE_RESPONSE is zero UUID plus nonce [A-Za-z0-9_-]{22}; C2S type 9
READY is playback UUID plus SHA-256[32].

| Type | Direction | UUID | Body |
|---:|---|---|---|
| 10 SERVER_CAPABILITIES | S2C | zero | u32 bits |
| 11 CLIENT_CAPABILITIES | C2S | zero | modified-UTF pendingProbeNonce,u32 bits |
| 12 STARTED_ACK | C2S | playback | sha256[32],u32 firstDispatchedNoteTimeMs |
| 13 CLIENT_PLAYBACK_FAILED | C2S | playback | u8 reason,u32 clientPositionMs |

Server bits are 0 BRASS_NOTE_BLOCK, 1 OYPB_V2, 2 BANK_MANIFEST_V1 and 3
SOUND_CATALOG_26_2. The maintained 26.2 backend sets all. Client bits are 0 OYPB_V2,
1 STARTED_ACK, 2 FIXED_CUSTOM_PATTERN, 3 POSITIONAL_PAN and 4 BANK_MANIFEST_V1.
A new client sends type 11 then unchanged type 8. Type 11 is accepted only for a pending
nonce/player/generation and never grants any authority. Old plugins ignore type 11; old
MODs send only type 8. OYPB v2 needs client bits 0..3; bank mode additionally needs bit 4.

## OYPB v1 and OYPB v2

OYPB v1 stays byte-exact. It remains eligible only for ordinary integral in-range notes;
custom sounds, fine cents and extended pitch never silently enter v1.

BEGIN remains:
u16 totalChunks,u32 compressedBytes,sha256[32],u32 durationMs,u8 mode,u32 startLeadMs.
Mode 0 is OYPB v1; mode 1 is OYPB v2. The v2 decompressed body is:

    ASCII OYPB; u8 formatVersion=2; canonical-varUInt durationMs;
    canonical-varUInt noteCount; canonical-varUInt stringCount;
    u8 spatialMode; u8 bankPolicy; bankManifestSha256[32];
    stringTable; noteRecords

spatialMode 0 ignores pan and 1 is positional pan. bankPolicy 0 forces vanilla fold and
contains an all-zero manifest hash. bankPolicy 1 requires an active schema-v1 manifest
with exactly the header hash. Paper sends policy 1 only to a current-generation
resource-pack-success player; per-recipient policy 0/1 buffers and hashes may differ.

The string table has canonical UTF-8 SoundEvent IDs, unique and sorted by UTF-8 bytes:
0..4096 entries, 1..256 bytes each, <=1 MiB total, matching
[a-z0-9_.-]+:[a-z0-9/._-]+. A record starts:

    canonical-varUInt deltaTimeMs; u8 kind; u8 runtimeInstrumentId;
    i16 pitchCents; u8 volume; u8 panBias

Time accumulates/non-decreases and is <=duration. pitchCents is -5400..7300,
volume 0..100, pan=panBias-100 and panBias 0..200. Kind 0 is a standard runtime
instrument. Kind 1 adds:
canonical-varUInt soundStringIndex,canonical-varUInt pattern,i64 fixedSeed.
pattern is 1..65535 and is the exact catalog variant selected by Paper. The client
retains event+pattern+seed and must not reroll a random variant. Unknown kind/event/
pattern, malformed UTF, unresolved sound or exact-EOF failure rejects the entire buffer.

OYPB v2 limits are <=4 MiB compressed/decoded, chunks 1..256, notes 1..100000 and
duration 0..Int.MAX_VALUE with exact SHA-256/zlib/EOF checks. READY proves buffer
transport, decode and preflight only; it is not audible-playback proof.

## Start acknowledgement and Paper fallback

After START, Paper enters ACK_PENDING, sends no Paper or lookahead/pre-play sound, and
waits until:
serverStartDeadline + firstDueNoteTimeMs - startPositionMs + 1000 ms.
The client sends exactly one type-12 ACK immediately after the first due note's
SoundManager dispatch call returns. Paper validates session SHA, UUID, generation and
first note time, then transitions ACK_PENDING -> LOCAL_CONFIRMED. Only then is local
client playback final and Paper playback fully suppressed.

No ACK or type 13 before ACK transitions ACK_PENDING -> PAPER_FALLBACK. Paper sends STOP
to the late client, calculates current monotonic song position and plays only notes at/
after that position, with no lookahead/pre-play and no restart from zero. Late ACK is
ignored. This deliberately avoids repeated opening notes, at the cost of a possible
short missing interval. PAUSE suspends the watchdog; RESUME recalculates it. STOP, quit
and backend switch end without fallback. Reload invalidates the old generation and,
when possible, resumes Paper from current position.

Type-13 reasons are 1 active-pack-missing, 2 sound-unresolved, 3 dispatch-exception,
4 world-unavailable, 5 session-lost and 6 decoded-route-invalid. After ACK, it may be
sent only after client local playback stops. ACK cannot establish a physical audible
result: muted volume, OS/audio-device failure, later other-mod filtering and inaudible
OGG content are not reliably observable and cannot guarantee automatic fallback.

For positional pan, use dispatch-time camera: pan 0 is one block forward, -100/+100 are
one block left/right at 90 degrees, intermediate values use the front semicircle and
volume is volume/100f.

## Persistent OYMI/OYMC/OYMB IDs versus playback runtime IDs

Persisted OYMI v4 remains:
u32 timeMs,u8 instrumentId,i16 pitchCents,u8 volume,i8 pan.
Persistent OYMC v4 remains:
canonical-varUInt deltaMs,u8 instrumentId,i16 pitchCents,u8 volume,u8 panBias.
Persistent OYMB v4 remains:
u32 time,u8 instrument,i16 pitchCents,u8 volume,i8 pan,u16 customSoundLength,
utf8 customSound,i64 customSeed.
Old OYMI/OYMC v1..v3 remain byte-exact and decode as legacyPitch*100 with zero fine
cents. The coordinate is vanilla lowest note=0; central F#4=1200 cents. NBS conversion
remains (key-33)*100+detune; custom is (key+customRootKey-45-33)*100+detune.
Static cents are supported; time-varying bend automation is not defined here.

OYMI/OYMC editor/import instrument IDs are the stable OMMT table, not the playback
runtime table: 0=PIANO, 1=BASS_GUITAR, 2=BASS_DRUM, 3=SNARE_DRUM, 4=STICKS,
5=FLUTE, 6=BELL, 7=GUITAR, 8=CHIME, 9=XYLOPHONE, 10=IRON_XYLOPHONE,
11=COW_BELL, 12=DIDGERIDOO, 13=BIT, 14=BANJO and 15=PLING. The newly supported
editor/import IDs are 16=TRUMPET, 17=TRUMPET_EXPOSED, 18=TRUMPET_OXIDIZED and
19=TRUMPET_WEATHERED. The import boundary explicitly converts this stable table to
the runtime table below before NoteEvent creation.

In contrast, the OYMB v1..v4 instrument field stores the already-converted
NoteEvent runtime ID. OYPB v1 and v2 also always use runtime IDs. Current OYMB
files are not reinterpreted as stable IDs and are never migrated merely because this
contract names both tables. No code may infer either mapping from an enum ordinal;
the two explicit tables and their conversion fixture are authoritative.

OYPB runtimeInstrumentId is fixed for 26.2:

| Runtime ID | SoundEvent |
|---:|---|
| 0 | minecraft:block.note_block.harp |
| 1 | minecraft:block.note_block.basedrum |
| 2 | minecraft:block.note_block.snare |
| 3 | minecraft:block.note_block.hat |
| 4 | minecraft:block.note_block.bass |
| 5 | minecraft:block.note_block.flute |
| 6 | minecraft:block.note_block.bell |
| 7 | minecraft:block.note_block.guitar |
| 8 | minecraft:block.note_block.chime |
| 9 | minecraft:block.note_block.xylophone |
| 10 | minecraft:block.note_block.iron_xylophone |
| 11 | minecraft:block.note_block.cow_bell |
| 12 | minecraft:block.note_block.didgeridoo |
| 13 | minecraft:block.note_block.bit |
| 14 | minecraft:block.note_block.banjo |
| 15 | minecraft:block.note_block.pling |
| 16 | minecraft:block.note_block.trumpet |
| 17 | minecraft:block.note_block.trumpet_exposed |
| 18 | minecraft:block.note_block.trumpet_oxidized |
| 19 | minecraft:block.note_block.trumpet_weathered |

The runtime order exactly matches the explicit Purpur 26.2 brass order 16..19.
IDs 20..255 are reserved and use Paper fallback in OYPB.

## Resource-pack bank v1

The optional pack changes only recipient audio routing. allow persists a request
asynchronously; deny removes only the configured stable UUID and immediately folds.
Invalid/missing HTTPS URL, UUID, SHA-1 or manifest hash, decline, timeout and callback
failure never stop music. Pack callbacks and database results are generation-bound.

Pitch coordinates use vanilla lowest note 0 and F#4=12 semitones. The generated pack contains
only anchors [-36,-12,36,60]; the central vanilla range 0..24 uses the ordinary Minecraft
event and is not duplicated in the pack. Values below 0 select the nearest of [-36,-12], and
values above 24 select the nearest of [36,60], choosing the lower anchor at an exact midpoint.
residualCents=pitchCents-anchor*100 is [-1200,1200] and
runtimePitch=2^(residualCents/1200). The combined vanilla-plus-pack range is -48..72 semitones
(ten octaves). Existing data outside that bank range remains valid but is octave-folded to the
vanilla range instead of selecting a clipped bank pitch.

The bank covers all 20 instruments and all catalog patterns of the selected list:
450 non-empty lines -> 448 unique events. The only allowed alias is
minecraft:block.ghoney_block.place -> minecraft:block.honey_block.place. The only input
duplicates are block.glass.break and block.glass.fall. Any other unresolved event fails
generation. The manifest path is assets/oyasaimusic/ommt-bank-manifest.json. It is
canonical UTF-8 JSON schema 1 recording 26.2, asset index id 32, anchors, selection/
catalog hashes, aliases, instrument map and each custom event/pattern source object SHA-1,
logical path, generated bank event and OGG SHA-256. The manifest hash is over canonical
bytes excluding its self-hash field.

The read-only supplied source directory is:
C:\Users\nanan\Desktop\instrumenttextures\assets\minecraft\
It contains sounds.json and forty OGGs: each of 20 instruments has name_-1.ogg and
name_1.ogg. They are lower/upper two-octave anchor sources around the central vanilla
asset. Name exceptions are bass -> bassattack, chime -> icechime and xylophone -> xylobone.
Anchors -36 and 60 are generated by offline ffmpeg resampling. The deployed optional pack is
OyasaiMusic-26.2-extended.zip at
https://download.mc-packs.net/pack/73e0fc6020a2b160eb8d5f5b27b9e5579a773d9d.zip,
stable UUID 8be1eaab-ca07-4f47-9957-40d29505e320, ZIP SHA-1
73e0fc6020a2b160eb8d5f5b27b9e5579a773d9d and manifest SHA-256
5aa68f33eea756ca43244751605924095dff18c5a01fd18767b3f1e51cd19506. It is still optional:
Paper sends it only for the persisted /mm rp allow state with required=false; server.properties
must not force it globally.

Editor preview, click audition and OYPB v2 use one resolver. A verified active manifest
uses bank events; without it, standard instruments and custom event+fixed seed use
octave-folded vanilla playback. Server-reported pack state alone never authorizes editor
preview.

## Bedrock transfer request

Channel `oyasaimusic:bedrock_transfer` carries Paper -> Velocity requests only.
Envelope: `u8 protocolVersion=1, UUID playerId (16 bytes), u8 allow, u8 packIdLen,
packId UTF-8 (<=64 bytes)`. Total 19..83 bytes. Unknown version, overlong packId,
or trailing bytes fail closed with no transfer. Bedrock players never receive the Java
ZIP. Transfer-driven quits must be excluded from quit penalties (`isTransferQuit`);
evac records expire after 60s.

Velocity accepts `bedrock_transfer` from backend `main` only and requires the payload
UUID to match that message's player connection. Allow records an in-memory pack flag
and transfers that player to force a pack-bearing re-login only after the configured
pack is readable and the Geyser pack event is subscribed; otherwise it removes the flag
and does not transfer. Deny removes the flag and does not force a transfer. Paper
reissues allow after an ordinary Bedrock join when the
persisted preference is ALLOW, which rehydrates Velocity state after proxy or backend
restart. On `SessionLoadResourcePacksEvent` the locally hosted `.mcpack` (own `packs/`
directory, never Geyser's auto-apply directory, lazily cached on first need) is
registered only for flagged UUIDs. Paper marks the external pack usable only after the
transfer-driven rejoin, then routes extended bank events through ordinary Paper
playback. If slash event names fail to resolve in-game, per-note vanilla fold applies.

## One-off builder, catalog and compatibility

The builder is a local non-production tool. Required inputs are 26.2 asset index/object
directories, the selection list, the supplied 20-instrument input directory, output ZIP
and explicit ffmpeg. It verifies index id 32, sounds.json, source hashes, every selected
pattern, anchors and generated OGG decoding; deduplicates by source-SHA-1+anchor; writes
pack metadata/manifest/sounds.json; reports ZIP SHA-1, manifest SHA-256, counts and size;
and atomically moves the result with no partial ZIP. Network is off by default.
--download-missing may fetch official Mojang objects only after asset-index SHA-1
verification. Generated Minecraft audio is not embedded in the Plugin JAR.

The 26.2 catalog is authoritative for import and /demosound. Fixed pattern selection must
work for ui.button.click, weather.rain and weather.rain.above; ui.button and weather cannot
be excluded. Existing sign IDs stay stable; new families append and never reindex.

| Situation | Required behavior |
|---|---|
| New 26.2 OMMT + new Paper, direct or Velocity main | v2 when route/caps permit, else v1 or Paper fallback |
| Pack absent/denied/invalid | folded preview or folded/Paper playback; never data loss |
| Old MOD | ignores type 10, sends legacy 8/9; v1 only when eligible |
| Old Plugin/no channel | no upload body; ordinary behavior/Paper fallback after probe timeout |
| Velocity or other backend | raw relay only / no OMMT service origin |
| Bedrock | ordinary Paper path; optional persisted-ALLOW Transfer pack, never OMMT buffering |

Required acceptance includes byte-exact v1 fixtures; v2 standard/custom/pan/bank decode;
the two distinct ID tables and explicit conversion fixture; 20 runtime instruments;
vanilla-center plus four-bank-anchor midpoint math; all 448 selection entries and one alias; malformed/oversized/duplicate/
reverse/stale-generation packets; PROBE/READY/ACK/FAILED current-position fallback; direct
Paper and Velocity-to-main; pack absent/success/decline; and fixed /demosound patterns.
A successful build is not proof of live transport, resource-pack delivery or audible audio.
