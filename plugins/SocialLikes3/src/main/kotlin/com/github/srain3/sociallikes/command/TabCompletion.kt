package com.github.srain3.sociallikes.command

/** Tab補完の候補。選択肢は入力中の文字で前方一致、説明用の表示（<ID> など）は引数が空のときだけ出す */
internal fun completions(
    arg: String,
    choices: List<String>,
    hint: String? = null,
): MutableList<String> =
    (choices.filter { it.startsWith(arg, ignoreCase = true) } +
            listOfNotNull(hint.takeIf { arg.isEmpty() }))
        .toMutableList()
