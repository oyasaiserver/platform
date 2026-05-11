package io.oyasai.toolbox

import com.destroystokyo.paper.profile.ProfileProperty
import java.util.*
import org.bukkit.Bukkit
import org.bukkit.DyeColor
import org.bukkit.Material
import org.bukkit.block.banner.Pattern
import org.bukkit.block.banner.PatternType
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.meta.BannerMeta
import org.bukkit.inventory.meta.SkullMeta

object CustomHead {
  private val urlList =
      mapOf( // XDDDD
          'A' to
              "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNGU0MTc0ODEyMTYyNmYyMmFlMTZhNGM2NjRjNzMwMWE5ZjhlYTU5MWJmNGQyOTg4ODk1NzY4MmE5ZmRhZiJ9fX0=",
          'B' to
              "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNDJiOWUxNmUyNjIwNmE3MDliZjA3YzI0OTNjYTRjNWQyNGY1Njc1NjU0ZmMxMzBkMWQ1ZWM1ZThjNWJlNSJ9fX0=",
          'C' to
              "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNjJhNTg3NjExMzMyMmYzOWFhMmJiZWY0YmQ2Yjc5ZWM2YjUyYTk3YmI2ZmFiNjc0YmRkYmQ3YjZlYWIzYmEifX19",
          'D' to
              "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZmE2NjE0MTlkZTQ5ZmY0YTJjOTdiMjdmODY4MDE0ZmJkYWViOGRkN2Y0MzkyNzc3ODMwYjI3MTRjYWFmZDFmIn19fQ==",
          'E' to
              "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMWFlZWY4OGUyYzkyOGI0NjZjNmVkNWRlYWE0ZTE5NzVhOTQzNmMyYjFiNDk4ZjlmN2NiZjkyYTliNTk5YTYifX19",
          'F' to
              "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvY2Q5ZDZlOTZiNWI5MmZmY2FmNDdkZDFjYWY2MWQzZjZlODQyOTEzZmM4ODg0OWYzZGU1NDhiZWVkNzFmYTgifX19",
          'G' to
              "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMjIwYzNiMmJiZmExZWQzYWM4YzM1YjNkZDM4MjQ3NDU2NTYzYzkyYWNlZmQ1OTI2YjEyNWNjYzY3ZDdkNWZkIn19fQ==",
          'H' to
              "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvN2JhOWMzM2E5NWZhMWU1MTlmODVhNDFjYTU2Nzk5Mzg0ZGI0MWZlN2UxZDdhNzkxNzUxZWNlOWJiYWU1ZDI3ZiJ9fX0=",
          'I' to
              "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNWM5OWRmYjI3MDRlMWJkNmU3ZmFjZmI0M2IzZTZmYmFiYWYxNmViYzdlMWZhYjA3NDE3YTZjNDY0ZTFkIn19fQ==",
          'J' to
              "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNzgxZWZhYTliYzNiNjA3NDdhNzUwYTY0OGIxOTg3ODdmMTg2ZWI5Mzg1OWFlYTUyMDMxZDVhOGM4ODEwNzUifX19",
          'K' to
              "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMzVkYzZkNTEzY2YxNjMzMzcyZjQxY2FhMDI2MTM5NmU2Y2M2NzIwZTA1OTMwOGM2NzlkNDRiNDdlZDYifX19",
          'L' to
              "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZDRhZmZhNDU1YjdmNTgyMTdkZThhY2JiZDkyMDFjOWVhODdjMTM0YWEzNTYyNTQ5NGY1ZDNmNjVjZTk0NiJ9fX0=",
          'M' to
              "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvYzhkZWM0NjY2YjRjNjdkODc1OTcxNGM4NTcxNGJlNmVhNGUzOWZmOTYyODg0OWY5OGI1MTRlZGYxYzNlNDY4MCJ9fX0=",
          'N' to
              "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZGEyMjFlNGY5NmJlZTYyNjE3NTIzOTZhMzI2NWZmYTRkZWRmOGZmNDgzOWFiZDE0ZjQ5ZWRlZTFlNTMwOTIifX19",
          'O' to
              "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvY2JiMWQxN2NlYmM1ZjBlY2M5ODdiODBlZmMwM2UzMmVjYjFjYjQwZGJjNWJjZTJmYWYzZTYwNTQyYTQwIn19fQ==",
          'P' to
              "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZDAyYzEwYWRjMzFiMWMyMWNjOThlY2Y4MDkyMjVmODdlMjVlNzIzNzhjZjQxN2RiNGJlM2Y2N2U5MWJiMSJ9fX0=",
          'Q' to
              "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNDUyNGQyOGM4MmYzNzExYTk3NTAxNDExZWNjM2NiNDY2ODc3NDgzYjEyMmEyNjU2YzhlZWFkZmI4ZDIxIn19fQ==",
          'R' to
              "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNzhhODFlZmRhZTQ3YmNiNDgwYTI1ZWQ5MWZmNmRlOTc3MmIwN2FlODdjM2M0ZTI3NzcwNWFiYmJkMzQxOSJ9fX0=",
          'S' to
              "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZDcxMDEzODQxNjUyODg4OTgxNTU0OGI0NjIzZDI4ZDg2YmJiYWU1NjE5ZDY5Y2Q5ZGJjNWFkNmI0Mzc0NCJ9fX0=",
          'T' to
              "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvYTNmYjUwZmU3NTU5YmM5OWYxM2M0NzM1NmNjZTk3ZmRhM2FhOTIzNTU3ZmI1YmZiMTdjODI1YWJmNGIxZDE5In19fQ==",
          'U' to
              "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZDY5OTFkY2JhMjVlYWUyNDNlYjVjZWI4MzI1ZjRhYjc4ZjlmMTQxMjdjMzgyZjZjZDQyYzRjNzgwNDJkNGI1In19fQ==",
          'V' to
              "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZThkNjgwMTg5OTRmMmYyZjU5ZDllNWYyZTNiYTNkNDZkOGIwYjllYTBlNjg0YmZiYjhlY2M3Yjg2ZWI5MjRjIn19fQ==",
          'W' to
              "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvODBjOTQ4M2Y1MWQxMjY3NDMyZTBmMmYzYmFhOGNkOTNlNjViNWVhYzc0ODJiMjdkYmNjZWJhZmI3MjE3NDhiIn19fQ==",
          'X' to
              "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMWQxYTNjOTY1NjIzNDg1MjdkNTc5OGYyOTE2MDkyODFmNzJlMTZkNjExZjFhNzZjMGZhN2FiZTA0MzY2NSJ9fX0=",
          'Y' to
              "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvM2RhOGI2NDczMDUyYWRhMjJlNmNhMzBjNDlmNmRjZTliOTk5MTZlNDIzYWM0ZmM2YjMwMWFkNzMzNjk3ZiJ9fX0=",
          'Z' to
              "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNzBkNDRmZWUwMzAzZjZkMzdmYWNhN2U5YzMxNTMwOTU1NmZhM2RmMzc5YmRkNTgyMzE3YWEzNjhhYTg0M2UifX19",
          '0' to
              "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNDdkZDA5ZWU3NGY4OWVjMTBmN2JkY2I0ZjcyM2EwMTBmZWZiN2VlM2VhZjA3ZDJhNmI5MmEzYTljYWFmMDNjNCJ9fX0=",
          '1' to
              "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvODc3Y2U2YmFkMGQyMWQ5YWFmZWEzNWUyOTZkY2Y3Y2E5YTZiOWFlNzM5ODc1YWMyYWVhYjY2NzE3ZjNmOTYyZiJ9fX0=",
          '2' to
              "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvYjBlMjAwNDcxMjZjNGU0MzdlOWEzNzE5MDdhMGMxYWQ2YmY3YTc4YzlhMDYxZTg1YjNjNmExOGUzZTFhMTY1MiJ9fX0=",
          '3' to
              "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvN2E1MjI5ZTNkMzc3YmI3YTNkYTFlYTFlYjJmYjM5NzRjYjQzNjJiZDQ4NjhjNDliMzNmZTc3MTdjMDUyZGE2MyJ9fX0=",
          '4' to
              "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvOTVhOTliNDFmMjZiZTdlODcwMjcwNTA4Zjc5Nzc2YTdkYWIyZjkzYzIyNTJiMzRlZDViMDMwNjU3ZDM1MmZhMyJ9fX0=",
          '5' to
              "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNGQ2OWU2ZjI0MTBlYzhlMTkzMTk1ZWEzZDY0NzQ2NGFlNDRlMGQ2ZWQ4ZjYzNGE3MTFkNmM3N2ExOTcyNDExMCJ9fX0=",
          '6' to
              "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMzQ3Mzg3YjRmNDljNmMyMjFjMmNlNWRiOWQ2NzNkZWYwOTBkNGUzNjBmZWNkNWMwMTJlMjYzYTI3MzA1MzExMSJ9fX0=",
          '7' to
              "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZGY4M2YyYjE1YzMwZmMzYzEwM2ZkN2UwZTQxZWU5Y2ZmYmJkMzY0YTJhMzUxNGJkODM5YmM5ZjhmZDc2NTg1YyJ9fX0=",
          '8' to
              "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvOTUyOGRkZWE2OTY5NGQzNTJhNjZjYWM1OTY0OTlhYjhkY2FhNjM3OGU3MGY3NWVmZmFkNjIxNWY4MDlhN2M3MSJ9fX0=",
          '9' to
              "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNGY2ZGQzMjY1N2QwMDA5MjEyMDQ5ODc0ODhjMzVkODhjMTk0NTA3ZmMxOTExZDA2NzgzMTI3NGJlZjM3Y2MwZCJ9fX0=",
          '+' to
              "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNjBiNTVmNzQ2ODFjNjgyODNhMWMxY2U1MWYxYzgzYjUyZTI5NzFjOTFlZTM0ZWZjYjU5OGRmMzk5MGE3ZTcifX19",
          '-' to
              "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvYzNlNGI1MzNlNGJhMmRmZjdjMGZhOTBmNjdlOGJlZjM2NDI4YjZjYjA2YzQ1MjYyNjMxYjBiMjVkYjg1YiJ9fX0=",
          ':' to
              "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMmZmY2MzMThjMjEyZGM3NDliNTk5NzU1ZTc2OTdkNDkyMzgyOTkzYzA3ZGUzZjhlNTRmZThmYzdkZGQxZSJ9fX0=",
          '.' to
              "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMzIzZTYxOWRjYjc1MTFjZGMyNTJhNWRjYTg1NjViMTlkOTUyYWM5ZjgyZDQ2N2U2NmM1MjI0MmY5Y2Q4OGZhIn19fQ==",
          '_' to
              "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNDYxYzhmZWJjYWMyMWI5ZjYzZDg3ZjlmZDkzMzU4OWZlNjQ2OGU5M2FhODFjZmNmNWU1MmE0MzIyZTE2ZTYifX19",
          '=' to
              "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZDc3MzE1NTMwNmM5ZDJkNThiMTQ5NjczOTUxY2JjNjY2NmFlZjg3YjhmODczNTM4ZmM4NTc0NWYwMWI1MSJ9fX0=",
          'i' to
              "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZjBiZTIwNWQ2MDg5ZTQ5ODIyNWU1MTFkYmMzYzFkM2JmZDA3MzkwMzlkYTRkMmUyMzFhZWEyYmIxZjc2ZjMxYSJ9fX0=",
          ' ' to
              "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvOTdjMjE0NGZkY2I1NWMzZmMxYmYxZGU1MWNhYmRmNTJjMzg4M2JjYjU3ODkyMzIyNmJlYjBkODVjYjJkOTgwIn19fQ==",
          'レ' to
              "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZWUyOGJlYTlkMzkzNzNkMzZlZThmYTQwZWM4M2Y5YzNmY2RkOTMxNzUyMjc3NDNmOWRkMWY3ZTc4ODZiN2VlNSJ9fX0=",
          '←' to
              "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvY2RjOWU0ZGNmYTQyMjFhMWZhZGMxYjViMmIxMWQ4YmVlYjU3ODc5YWYxYzQyMzYyMTQyYmFlMWVkZDUifX19",
          '→' to
              "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvOTU2YTM2MTg0NTllNDNiMjg3YjIyYjdlMjM1ZWM2OTk1OTQ1NDZjNmZjZDZkYzg0YmZjYTRjZjMwYWI5MzExIn19fQ==",
          '↓' to
              "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvODgyZmFmOWE1ODRjNGQ2NzZkNzMwYjIzZjg5NDJiYjk5N2ZhM2RhZDQ2ZDRmNjVlMjg4YzM5ZWI0NzFjZTcifX19",
          '↑' to
              "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMWFkNmM4MWY4OTlhNzg1ZWNmMjZiZTFkYzQ4ZWFlMmJjZmU3NzdhODYyMzkwZjU3ODVlOTViZDgzYmQxNGQifX19")
  private val headList = mutableMapOf<Char, ItemStack>()

  private val urlList2 =
      mapOf(
          "camera" to
              "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNmZiNWVlZTQwYzNkZDY2ODNjZWM4ZGQxYzZjM2ZjMWIxZjAxMzcxNzg2NjNkNzYxMDljZmUxMmVkN2JmMjc4ZSJ9fX0=")
  private val headList2 = mutableMapOf<String, ItemStack>()
  private val bannerList = mutableMapOf<Char, ItemStack>()

  fun get(char: Char): ItemStack? = headList[char]

  fun createHeadPlayers() {
    urlList.forEach { (char, url) -> headList[char] = getSkull(url) }
  }

  fun getSkull(textures: String): ItemStack {
    val head = ItemStack(Material.PLAYER_HEAD)
    head.editMeta(SkullMeta::class.java) { meta ->
      val uuid = UUID.randomUUID()
      val profile = Bukkit.createProfile(uuid, uuid.toString().substring(0, 16))
      profile.setProperty(ProfileProperty("textures", textures))
      meta.setPlayerProfile(profile)
    }
    return head
  }

  fun getHead(str: String): ItemStack? {
    headList2[str]?.let {
      return it
    }
    return urlList2[str]?.let { url ->
      val item = getSkull(url)
      headList2[str] = item
      item
    }
  }

  fun getBannerChar(c: Char): ItemStack? = bannerList[c]

  fun createBanner() {
    bannerList.clear()
    val patterns =
        mapOf(
            '0' to
                listOf(
                    Pattern(DyeColor.WHITE, PatternType.STRIPE_BOTTOM),
                    Pattern(DyeColor.WHITE, PatternType.STRIPE_LEFT),
                    Pattern(DyeColor.WHITE, PatternType.STRIPE_TOP),
                    Pattern(DyeColor.WHITE, PatternType.STRIPE_RIGHT),
                    Pattern(DyeColor.WHITE, PatternType.STRIPE_DOWNLEFT),
                    Pattern(DyeColor.BLACK, PatternType.BORDER)),
            '1' to
                listOf(
                    Pattern(DyeColor.WHITE, PatternType.STRIPE_CENTER),
                    Pattern(DyeColor.WHITE, PatternType.SQUARE_TOP_LEFT),
                    Pattern(DyeColor.BLACK, PatternType.CURLY_BORDER),
                    Pattern(DyeColor.WHITE, PatternType.STRIPE_BOTTOM),
                    Pattern(DyeColor.BLACK, PatternType.BORDER)),
            '2' to
                listOf(
                    Pattern(DyeColor.WHITE, PatternType.STRIPE_TOP),
                    Pattern(DyeColor.BLACK, PatternType.RHOMBUS),
                    Pattern(DyeColor.WHITE, PatternType.STRIPE_BOTTOM),
                    Pattern(DyeColor.WHITE, PatternType.STRIPE_DOWNLEFT),
                    Pattern(DyeColor.BLACK, PatternType.BORDER)),
            '3' to
                listOf(
                    Pattern(DyeColor.WHITE, PatternType.STRIPE_BOTTOM),
                    Pattern(DyeColor.WHITE, PatternType.STRIPE_MIDDLE),
                    Pattern(DyeColor.WHITE, PatternType.STRIPE_TOP),
                    Pattern(DyeColor.BLACK, PatternType.CURLY_BORDER),
                    Pattern(DyeColor.WHITE, PatternType.STRIPE_RIGHT),
                    Pattern(DyeColor.BLACK, PatternType.BORDER)),
            '4' to
                listOf(
                    Pattern(DyeColor.WHITE, PatternType.STRIPE_LEFT),
                    Pattern(DyeColor.BLACK, PatternType.HALF_HORIZONTAL_BOTTOM),
                    Pattern(DyeColor.WHITE, PatternType.STRIPE_RIGHT),
                    Pattern(DyeColor.WHITE, PatternType.STRIPE_MIDDLE),
                    Pattern(DyeColor.BLACK, PatternType.BORDER)),
            '5' to
                listOf(
                    Pattern(DyeColor.WHITE, PatternType.STRIPE_BOTTOM),
                    Pattern(DyeColor.BLACK, PatternType.RHOMBUS),
                    Pattern(DyeColor.WHITE, PatternType.STRIPE_TOP),
                    Pattern(DyeColor.WHITE, PatternType.STRIPE_DOWNRIGHT),
                    Pattern(DyeColor.BLACK, PatternType.BORDER)),
            '6' to
                listOf(
                    Pattern(DyeColor.WHITE, PatternType.STRIPE_BOTTOM),
                    Pattern(DyeColor.WHITE, PatternType.STRIPE_RIGHT),
                    Pattern(DyeColor.BLACK, PatternType.HALF_HORIZONTAL),
                    Pattern(DyeColor.WHITE, PatternType.STRIPE_MIDDLE),
                    Pattern(DyeColor.WHITE, PatternType.STRIPE_TOP),
                    Pattern(DyeColor.WHITE, PatternType.STRIPE_LEFT),
                    Pattern(DyeColor.BLACK, PatternType.BORDER)),
            '7' to
                listOf(
                    Pattern(DyeColor.WHITE, PatternType.STRIPE_DOWNLEFT),
                    Pattern(DyeColor.WHITE, PatternType.STRIPE_TOP),
                    Pattern(DyeColor.BLACK, PatternType.BORDER)),
            '8' to
                listOf(
                    Pattern(DyeColor.WHITE, PatternType.STRIPE_TOP),
                    Pattern(DyeColor.WHITE, PatternType.STRIPE_LEFT),
                    Pattern(DyeColor.WHITE, PatternType.STRIPE_MIDDLE),
                    Pattern(DyeColor.WHITE, PatternType.STRIPE_BOTTOM),
                    Pattern(DyeColor.WHITE, PatternType.STRIPE_RIGHT),
                    Pattern(DyeColor.BLACK, PatternType.BORDER)),
            '9' to
                listOf(
                    Pattern(DyeColor.WHITE, PatternType.STRIPE_LEFT),
                    Pattern(DyeColor.BLACK, PatternType.HALF_HORIZONTAL_BOTTOM),
                    Pattern(DyeColor.WHITE, PatternType.STRIPE_MIDDLE),
                    Pattern(DyeColor.WHITE, PatternType.STRIPE_TOP),
                    Pattern(DyeColor.WHITE, PatternType.STRIPE_RIGHT),
                    Pattern(DyeColor.WHITE, PatternType.STRIPE_BOTTOM),
                    Pattern(DyeColor.BLACK, PatternType.BORDER)))

    patterns.forEach { (c, patternList) ->
      val item = ItemStack(Material.BLACK_BANNER)
      item.editMeta(BannerMeta::class.java) { meta -> patternList.forEach { meta.addPattern(it) } }
      hideItemStackMeta(item)
      bannerList[c] = item
    }
  }
}
