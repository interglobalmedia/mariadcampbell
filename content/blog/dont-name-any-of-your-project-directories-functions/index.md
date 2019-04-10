---
title: "Don’t name any of your project directories functions"
image: terminal.png
description: Yet another reason to get to know Command Line intimately!
date: '2018-01-24'
tags: ["command-line", "functions", "terminal", "unix"]
categories: ["command-line"]
author: "Maria D. Campbell"
---

Today, during my `Evening JS Intensive` boot camp class, I created a directory called `functions`, in which I wanted to store an `index.html` and `functions.js` file in which I would write some functions we were creating in class. Then  I went into `iTerm2` so I could `cd` into that directory. Guess what? This is what I got back:

```shell
ARCH3" ]
        then
            VERSIONS="$(command find "$NVM_DIRS_TO_SEARCH1" "$NVM_DIRS_TO_SEARCH2" "$NVM_DIRS_TO_SEARCH3" -maxdepth 1 -type d -name "$PATTERN*" \
        | command sed "
            s#$NVM_VERSION_DIR_IOJS/#$NVM_IOJS_PREFIX-#;
            \#$NVM_VERSION_DIR_IOJS# d;
            s#^$NVM_DIR/##;
            \#^versions\$# d;
            s#^versions/##;
            s#^v#$NVM_NODE_PREFIX-v#;
            s#^\($NVM_IOJS_PREFIX\)[-/]v#\1.v#;
            s#^\($NVM_NODE_PREFIX\)[-/]v#\1.v#" \
        | command sort -t. -u -k 2.2,2n -k 3,3n -k 4,4n \
        | command sed "
            s/^\($NVM_IOJS_PREFIX\)\./\1-/;
            s/^$NVM_NODE_PREFIX\.//" \
      )"
        fi
        if [ "$ZHS_HAS_SHWORDSPLIT_UNSET" -eq 1 ] && nvm_has "unsetopt"
        then
            unsetopt shwordsplit
        fi
    fi
    if [ "${NVM_ADD_SYSTEM-}" = true ]
    then
        if [ -z "$PATTERN" ] || [ "_$PATTERN" = "_v" ]
        then
            VERSIONS="$VERSIONS$(command printf '\n%s' 'system')"
        elif [ "$PATTERN" = 'system' ]
        then
            VERSIONS="$(command printf '%s' 'system')"
        fi
    fi
    if [ -z "$VERSIONS" ]
    then
        echo "N/A"
        return 3
    fi
    echo "$VERSIONS"
}
nvm_ls_current () {
    local NVM_LS_CURRENT_NODE_PATH
    NVM_LS_CURRENT_NODE_PATH="$(command which node 2> /dev/null)"
    if [ $? -ne 0 ]
    then
        echo 'none'
    elif nvm_tree_contains_path "$(nvm_version_dir iojs)" "$NVM_LS_CURRENT_NODE_PATH"
    then
        nvm_add_iojs_prefix "$(iojs --version 2>/dev/null)"
    elif nvm_tree_contains_path "$NVM_DIR" "$NVM_LS_CURRENT_NODE_PATH"
    then
        local VERSION
        VERSION="$(node --version 2>/dev/null)"
        if [ "$VERSION" = "v0.6.21-pre" ]
        then
            echo "v0.6.21"
        else
            echo "$VERSION"
        fi
    else
        echo 'system'
    fi
}
nvm_ls_remote () {
    local PATTERN
    PATTERN="$1"
    if nvm_validate_implicit_alias "$PATTERN" 2> /dev/null
    then
        PATTERN="$(nvm_ls_remote "$(nvm_print_implicit_alias remote "$PATTERN")" | command tail -n1)"
    elif [ -n "$PATTERN" ]
    then
        PATTERN="$(nvm_ensure_version_prefix "$PATTERN")"
    else
        PATTERN=".*"
    fi
    nvm_ls_remote_index_tab node std "$NVM_NODEJS_ORG_MIRROR" "$PATTERN"
}
nvm_ls_remote_index_tab () {
    if [ "$#" -lt 4 ]
    then
        echo "not enough arguments" >&2
        return 5
    fi
    local TYPE
    TYPE="$1"
    local PREFIX
    PREFIX=''
    case "$TYPE-$2" in
        (iojs-std) PREFIX="$(nvm_iojs_prefix)-"  ;;
        (node-std) PREFIX=''  ;;
        (iojs-*) echo "unknown type of io.js release" >&2
            return 4 ;;
        (node-*) echo "unknown type of node.js release" >&2
            return 4 ;;
    esac
    local SORT_COMMAND
    SORT_COMMAND='sort'
    case "$TYPE" in
        (node) SORT_COMMAND='sort -t. -u -k 1.2,1n -k 2,2n -k 3,3n'  ;;
    esac
    local MIRROR
    MIRROR="$3"
    local PATTERN
    PATTERN="$4"
    local VERSIONS
    if [ -n "$PATTERN" ]
    then
        if [ "_$TYPE" = "_iojs" ]
        then
            PATTERN="$(nvm_ensure_version_prefix "$(nvm_strip_iojs_prefix "$PATTERN")")"
        else
            PATTERN="$(nvm_ensure_version_prefix "$PATTERN")"
        fi
    else
        PATTERN=".*"
    fi
    ZHS_HAS_SHWORDSPLIT_UNSET=1
    if nvm_has "setopt"
    then
        ZHS_HAS_SHWORDSPLIT_UNSET=$(setopt | command grep shwordsplit > /dev/null ; echo $?)
        setopt shwordsplit
    fi
    VERSIONS="$(nvm_download -L -s "$MIRROR/index.tab" -o - \
    | command sed "
        1d;
        s/^/$PREFIX/;
        s/[[:blank:]].*//" \
    | command grep -w "$PATTERN" \
    | $SORT_COMMAND)"
    if [ "$ZHS_HAS_SHWORDSPLIT_UNSET" -eq 1 ] && nvm_has "unsetopt"
    then
        unsetopt shwordsplit
    fi
    if [ -z "$VERSIONS" ]
    then
        echo "N/A"
        return 3
    fi
    echo "$VERSIONS"
}
nvm_ls_remote_iojs () {
    nvm_ls_remote_index_tab iojs std "$NVM_IOJS_ORG_MIRROR" "$1"
}
nvm_match_version () {
    local NVM_IOJS_PREFIX
    NVM_IOJS_PREFIX="$(nvm_iojs_prefix)"
    local PROVIDED_VERSION
    PROVIDED_VERSION="$1"
    case "_$PROVIDED_VERSION" in
        ("_$NVM_IOJS_PREFIX" | "_io.js") nvm_version "$NVM_IOJS_PREFIX" ;;
        ("_system") echo "system" ;;
        (*) nvm_version "$PROVIDED_VERSION" ;;
    esac
}
nvm_node_prefix () {
    echo "node"
}
nvm_normalize_version () {
    echo "${1#v}" | command awk -F. '{ printf("%d%06d%06d\n", $1,$2,$3); }'
}
nvm_npm_global_modules () {
    local NPMLIST
    local VERSION
    VERSION="$1"
    if [ "_$VERSION" = "_system" ]
    then
        NPMLIST=$(nvm use system > /dev/null && npm list -g --depth=0 2> /dev/null | command tail -n +2)
    else
        NPMLIST=$(nvm use "$VERSION" > /dev/null && npm list -g --depth=0 2> /dev/null | command tail -n +2)
    fi
    local INSTALLS
    INSTALLS=$(echo "$NPMLIST" | command sed -e '/ -> / d' -e '/\(empty\)/ d' -e 's/^.* \(.*@[^ ]*\).*/\1/' -e '/^npm@[^ ]*.*$/ d' | command xargs)
    local LINKS
    LINKS="$(echo "$NPMLIST" | command sed -n 's/.* -> \(.*\)/\1/ p')"
    echo "$INSTALLS //// $LINKS"
}
nvm_num_version_groups () {
    local VERSION
    VERSION="$1"
    VERSION="${VERSION#v}"
    VERSION="${VERSION%.}"
    if [ -z "$VERSION" ]
    then
        echo "0"
        return
    fi
    local NVM_NUM_DOTS
    NVM_NUM_DOTS=$(echo "$VERSION" | command sed -e 's/[^\.]//g')
    local NVM_NUM_GROUPS
    NVM_NUM_GROUPS=".$NVM_NUM_DOTS"
    echo "${#NVM_NUM_GROUPS}"
}
nvm_prepend_path () {
    if [ -z "$1" ]
    then
        echo "$2"
    else
        echo "$2:$1"
    fi
}
nvm_print_implicit_alias () {
    if [ "_$1" != "_local" ] && [ "_$1" != "_remote" ]
    then
        echo "nvm_print_implicit_alias must be specified with local or remote as the first argument." >&2
        return 1
    fi
    local NVM_IMPLICIT
    NVM_IMPLICIT="$2"
    if ! nvm_validate_implicit_alias "$NVM_IMPLICIT"
    then
        return 2
    fi
    local ZHS_HAS_SHWORDSPLIT_UNSET
    local NVM_IOJS_PREFIX
    NVM_IOJS_PREFIX="$(nvm_iojs_prefix)"
    local NVM_NODE_PREFIX
    NVM_NODE_PREFIX="$(nvm_node_prefix)"
    local NVM_COMMAND
    local NVM_ADD_PREFIX_COMMAND
    local LAST_TWO
    case "$NVM_IMPLICIT" in
        ("$NVM_IOJS_PREFIX") NVM_COMMAND="nvm_ls_remote_iojs"
            NVM_ADD_PREFIX_COMMAND="nvm_add_iojs_prefix"
            if [ "_$1" = "_local" ]
            then
                NVM_COMMAND="nvm_ls $NVM_IMPLICIT"
            fi
            ZHS_HAS_SHWORDSPLIT_UNSET=1
            if nvm_has "setopt"
            then
                ZHS_HAS_SHWORDSPLIT_UNSET=$(setopt | command grep shwordsplit > /dev/null ; echo $?)
                setopt shwordsplit
            fi
            local NVM_IOJS_VERSION
            local EXIT_CODE
            NVM_IOJS_VERSION="$($NVM_COMMAND)"
            EXIT_CODE="$?"
            if [ "_$EXIT_CODE" = "_0" ]
            then
                NVM_IOJS_VERSION="$(echo "$NVM_IOJS_VERSION" | sed "s/^$NVM_IMPLICIT-//" | command grep -e '^v' | command cut -c2- | command cut -d . -f 1,2 | uniq | command tail -1)"
            fi
            if [ "$ZHS_HAS_SHWORDSPLIT_UNSET" -eq 1 ] && nvm_has "unsetopt"
            then
                unsetopt shwordsplit
            fi
            if [ "_$NVM_IOJS_VERSION" = "_N/A" ]
            then
                echo "N/A"
            else
                $NVM_ADD_PREFIX_COMMAND "$NVM_IOJS_VERSION"
            fi
            return $EXIT_CODE ;;
        ("$NVM_NODE_PREFIX") echo "stable"
            return ;;
        (*) NVM_COMMAND="nvm_ls_remote"
            if [ "_$1" = "_local" ]
            then
                NVM_COMMAND="nvm_ls node"
            fi
            ZHS_HAS_SHWORDSPLIT_UNSET=1
            if nvm_has "setopt"
            then
                ZHS_HAS_SHWORDSPLIT_UNSET=$(setopt | command grep shwordsplit > /dev/null ; echo $?)
                setopt shwordsplit
            fi
            LAST_TWO=$($NVM_COMMAND | command grep -e '^v' | command cut -c2- | command cut -d . -f 1,2 | uniq)
            if [ "$ZHS_HAS_SHWORDSPLIT_UNSET" -eq 1 ] && nvm_has "unsetopt"
            then
                unsetopt shwordsplit
            fi ;;
    esac
    local MINOR
    local STABLE
    local UNSTABLE
    local MOD
    local NORMALIZED_VERSION
    ZHS_HAS_SHWORDSPLIT_UNSET=1
    if nvm_has "setopt"
    then
        ZHS_HAS_SHWORDSPLIT_UNSET=$(setopt | command grep shwordsplit > /dev/null ; echo $?)
        setopt shwordsplit
    fi
    for MINOR in $LAST_TWO
    do
        NORMALIZED_VERSION="$(nvm_normalize_version "$MINOR")"
        if [ "_0${NORMALIZED_VERSION#?}" != "_$NORMALIZED_VERSION" ]
        then
            STABLE="$MINOR"
        else
            MOD=$(expr "$NORMALIZED_VERSION" \/ 1000000 \% 2)
            if [ "$MOD" -eq 0 ]
            then
                STABLE="$MINOR"
            elif [ "$MOD" -eq 1 ]
            then
                UNSTABLE="$MINOR"
            fi
        fi
    done
    if [ "$ZHS_HAS_SHWORDSPLIT_UNSET" -eq 1 ] && nvm_has "unsetopt"
    then
        unsetopt shwordsplit
    fi
    if [ "_$2" = '_stable' ]
    then
        echo "${STABLE}"
    elif [ "_$2" = '_unstable' ]
    then
        echo "${UNSTABLE}"
    fi
}
nvm_print_npm_version () {
    if nvm_has "npm"
    then
        echo " (npm v$(npm --version 2>/dev/null))"
    fi
}
nvm_print_versions () {
    local VERSION
    local FORMAT
    local NVM_CURRENT
    NVM_CURRENT=$(nvm_ls_current)
    echo "$1" | while read -r VERSION
    do
        if [ "_$VERSION" = "_$NVM_CURRENT" ]
        then
            FORMAT='\033[0;32m-> %12s\033[0m'
        elif [ "$VERSION" = "system" ]
        then
            FORMAT='\033[0;33m%15s\033[0m'
        elif [ -d "$(nvm_version_path "$VERSION" 2> /dev/null)" ]
        then
            FORMAT='\033[0;34m%15s\033[0m'
        else
            FORMAT='%15s'
        fi
        command printf "$FORMAT\n" "$VERSION"
    done
}
nvm_process_parameters () {
    local NVM_AUTO_MODE
    NVM_AUTO_MODE='use'
    if nvm_supports_source_options
    then
        while [ $# -ne 0 ]
        do
            case "$1" in
                (--install) NVM_AUTO_MODE='install'  ;;
                (--no-use) NVM_AUTO_MODE='none'  ;;
            esac
            shift
        done
    fi
    nvm_auto "$NVM_AUTO_MODE"
}
nvm_prompt_info () {
    [[ -f "$NVM_DIR/nvm.sh" ]] || return
    local nvm_prompt
    nvm_prompt=$(node -v 2>/dev/null)
    [[ "${nvm_prompt}x" == "x" ]] && return
    nvm_prompt=${nvm_prompt:1}
    echo "${ZSH_THEME_NVM_PROMPT_PREFIX}${nvm_prompt}${ZSH_THEME_NVM_PROMPT_SUFFIX}"
}
nvm_rc_version () {
    export NVM_RC_VERSION=''
    local NVMRC_PATH
    NVMRC_PATH="$(nvm_find_nvmrc)"
    if [ -e "$NVMRC_PATH" ]
    then
        read -r NVM_RC_VERSION < "$NVMRC_PATH"
        echo "Found '$NVMRC_PATH' with version <$NVM_RC_VERSION>"
    else
        echo "No .nvmrc file found" >&2
        return 1
    fi
}
nvm_remote_version () {
    local PATTERN
    PATTERN="$1"
    local VERSION
    if nvm_validate_implicit_alias "$PATTERN" 2> /dev/null
    then
        case "_$PATTERN" in
            ("_$(nvm_iojs_prefix)") VERSION="$(nvm_ls_remote_iojs | command tail -n1)"  ;;
            (*) VERSION="$(nvm_ls_remote "$PATTERN")"  ;;
        esac
    else
        VERSION="$(nvm_remote_versions "$PATTERN" | command tail -n1)"
    fi
    echo "$VERSION"
    if [ "_$VERSION" = '_N/A' ]
    then
        return 3
    fi
}
nvm_remote_versions () {
    local NVM_IOJS_PREFIX
    NVM_IOJS_PREFIX="$(nvm_iojs_prefix)"
    local PATTERN
    PATTERN="$1"
    case "_$PATTERN" in
        ("_$NVM_IOJS_PREFIX" | "_io.js") VERSIONS="$(nvm_ls_remote_iojs)"  ;;
        ("_$(nvm_node_prefix)") VERSIONS="$(nvm_ls_remote)"  ;;
        (*) if nvm_validate_implicit_alias "$PATTERN" 2> /dev/null
            then
                echo "Implicit aliases are not supported in nvm_remote_versions." >&2
                return 1
            fi
            VERSIONS="$(echo "$(nvm_ls_remote "$PATTERN")
$(nvm_ls_remote_iojs "$PATTERN")" | command grep -v "N/A" | command sed '/^$/d')"  ;;
    esac
    if [ -z "$VERSIONS" ]
    then
        echo "N/A"
        return 3
    else
        echo "$VERSIONS"
    fi
}
nvm_resolve_alias () {
    if [ -z "$1" ]
    then
        return 1
    fi
    local PATTERN
    PATTERN="$1"
    local ALIAS
    ALIAS="$PATTERN"
    local ALIAS_TEMP
    local SEEN_ALIASES
    SEEN_ALIASES="$ALIAS"
    while true
    do
        ALIAS_TEMP="$(nvm_alias "$ALIAS" 2> /dev/null)"
        if [ -z "$ALIAS_TEMP" ]
        then
            break
        fi
        if [ -n "$ALIAS_TEMP" ] && command printf "$SEEN_ALIASES" | command grep -e "^$ALIAS_TEMP$" > /dev/null
        then
            ALIAS="∞"
            break
        fi
        SEEN_ALIASES="$SEEN_ALIASES\n$ALIAS_TEMP"
        ALIAS="$ALIAS_TEMP"
    done
    if [ -n "$ALIAS" ] && [ "_$ALIAS" != "_$PATTERN" ]
    then
        local NVM_IOJS_PREFIX
        NVM_IOJS_PREFIX="$(nvm_iojs_prefix)"
        local NVM_NODE_PREFIX
        NVM_NODE_PREFIX="$(nvm_node_prefix)"
        case "_$ALIAS" in
            ("_∞" | "_$NVM_IOJS_PREFIX" | "_$NVM_IOJS_PREFIX-" | "_$NVM_NODE_PREFIX") echo "$ALIAS" ;;
            (*) nvm_ensure_version_prefix "$ALIAS" ;;
        esac
        return 0
    fi
    if nvm_validate_implicit_alias "$PATTERN" 2> /dev/null
    then
        local IMPLICIT
        IMPLICIT="$(nvm_print_implicit_alias local "$PATTERN" 2> /dev/null)"
        if [ -n "$IMPLICIT" ]
        then
            nvm_ensure_version_prefix "$IMPLICIT"
        fi
    fi
    return 2
}
nvm_resolve_local_alias () {
    if [ -z "$1" ]
    then
        return 1
    fi
    local VERSION
    local EXIT_CODE
    VERSION="$(nvm_resolve_alias "$1")"
    EXIT_CODE=$?
    if [ -z "$VERSION" ]
    then
        return $EXIT_CODE
    fi
    if [ "_$VERSION" != "_∞" ]
    then
        nvm_version "$VERSION"
    else
        echo "$VERSION"
    fi
}
nvm_sanitize_path () {
    local SANITIZED_PATH
    SANITIZED_PATH="$1"
    if [ "_$1" != "_$NVM_DIR" ]
    then
        SANITIZED_PATH="$(echo "$SANITIZED_PATH" | command sed "s#$NVM_DIR#\$NVM_DIR#g")"
    fi
    echo "$SANITIZED_PATH" | command sed "s#$HOME#\$HOME#g"
}
nvm_strip_iojs_prefix () {
    local NVM_IOJS_PREFIX
    NVM_IOJS_PREFIX="$(nvm_iojs_prefix)"
    if [ "_$1" = "_$NVM_IOJS_PREFIX" ]
    then
        echo
    else
        echo "${1#"$NVM_IOJS_PREFIX"-}"
    fi
}
nvm_strip_path () {
    echo "$1" | command sed -e "s#$NVM_DIR/[^/]*$2[^:]*:##g" -e "s#:$NVM_DIR/[^/]*$2[^:]*##g" -e "s#$NVM_DIR/[^/]*$2[^:]*##g" -e "s#$NVM_DIR/versions/[^/]*/[^/]*$2[^:]*:##g" -e "s#:$NVM_DIR/versions/[^/]*/[^/]*$2[^:]*##g" -e "s#$NVM_DIR/versions/[^/]*/[^/]*$2[^:]*##g"
}
nvm_supports_source_options () {
    [ "_$(echo '[ $# -gt 0 ] && echo $1' | . /dev/stdin yes 2> /dev/null)" = "_yes" ]
}
nvm_supports_xz () {
    command which xz > /dev/null 2>&1 && nvm_version_greater_than_or_equal_to "$1" "2.3.2"
}
nvm_tree_contains_path () {
    local tree
    tree="$1"
    local node_path
    node_path="$2"
    if [ "@$tree@" = "@@" ] || [ "@$node_path@" = "@@" ]
    then
        echo "both the tree and the node path are required" >&2
        return 2
    fi
    local pathdir
    pathdir=$(dirname "$node_path")
    while [ "$pathdir" != "" ] && [ "$pathdir" != "." ] && [ "$pathdir" != "/" ] && [ "$pathdir" != "$tree" ]
    do
        pathdir=$(dirname "$pathdir")
    done
    [ "$pathdir" = "$tree" ]
}
nvm_validate_implicit_alias () {
    local NVM_IOJS_PREFIX
    NVM_IOJS_PREFIX="$(nvm_iojs_prefix)"
    local NVM_NODE_PREFIX
    NVM_NODE_PREFIX="$(nvm_node_prefix)"
    case "$1" in
        ("stable" | "unstable" | "$NVM_IOJS_PREFIX" | "$NVM_NODE_PREFIX") return ;;
        (*) echo "Only implicit aliases 'stable', 'unstable', '$NVM_IOJS_PREFIX', and '$NVM_NODE_PREFIX' are supported." >&2
            return 1 ;;
    esac
}
nvm_version () {
    local PATTERN
    PATTERN="$1"
    local VERSION
    if [ -z "$PATTERN" ]
    then
        PATTERN='current'
    fi
    if [ "$PATTERN" = "current" ]
    then
        nvm_ls_current
        return $?
    fi
    local NVM_NODE_PREFIX
    NVM_NODE_PREFIX="$(nvm_node_prefix)"
    case "_$PATTERN" in
        ("_$NVM_NODE_PREFIX" | "_$NVM_NODE_PREFIX-") PATTERN="stable"  ;;
    esac
    VERSION="$(nvm_ls "$PATTERN" | command tail -n1)"
    if [ -z "$VERSION" ] || [ "_$VERSION" = "_N/A" ]
    then
        echo "N/A"
        return 3
    else
        echo "$VERSION"
    fi
}
nvm_version_dir () {
    local NVM_WHICH_DIR
    NVM_WHICH_DIR="$1"
    if [ -z "$NVM_WHICH_DIR" ] || [ "_$NVM_WHICH_DIR" = "_new" ]
    then
        echo "$NVM_DIR/versions/node"
    elif [ "_$NVM_WHICH_DIR" = "_iojs" ]
    then
        echo "$NVM_DIR/versions/io.js"
    elif [ "_$NVM_WHICH_DIR" = "_old" ]
    then
        echo "$NVM_DIR"
    else
        echo "unknown version dir" >&2
        return 3
    fi
}
nvm_version_greater () {
    local LHS
    LHS="$(nvm_normalize_version "$1")"
    local RHS
    RHS="$(nvm_normalize_version "$2")"
    [ "$LHS" -gt "$RHS" ]
}
nvm_version_greater_than_or_equal_to () {
    local LHS
    LHS="$(nvm_normalize_version "$1")"
    local RHS
    RHS="$(nvm_normalize_version "$2")"
    [ "$LHS" -ge "$RHS" ]
}
nvm_version_path () {
    local VERSION
    VERSION="$1"
    if [ -z "$VERSION" ]
    then
        echo "version is required" >&2
        return 3
    elif nvm_is_iojs_version "$VERSION"
    then
        echo "$(nvm_version_dir iojs)/$(nvm_strip_iojs_prefix "$VERSION")"
    elif nvm_version_greater 0.12.0 "$VERSION"
    then
        echo "$(nvm_version_dir old)/$VERSION"
    else
        echo "$(nvm_version_dir new)/$VERSION"
    fi
}
omz_diagnostic_dump () {
    emulate -L zsh
    builtin echo "Generating diagnostic dump; please be patient..."
    local thisfcn=omz_diagnostic_dump
    local -A opts
    local opt_verbose opt_noverbose opt_outfile
    local timestamp=$(date +%Y%m%d-%H%M%S)
    local outfile=omz_diagdump_$timestamp.txt
    builtin zparseopts -A opts -D -- "v+=opt_verbose" "V+=opt_noverbose"
    local verbose n_verbose=${#opt_verbose} n_noverbose=${#opt_noverbose}
    (( verbose = 1 + n_verbose - n_noverbose ))
    if [[ ${#*} > 0 ]]
    then
        opt_outfile=$1
    fi
    if [[ ${#*} > 1 ]]
    then
        builtin echo "$thisfcn: error: too many arguments" >&2
        return 1
    fi
    if [[ -n "$opt_outfile" ]]
    then
        outfile="$opt_outfile"
    fi
    _omz_diag_dump_one_big_text &> "$outfile"
    if [[ $? != 0 ]]
    then
        builtin echo "$thisfcn: error while creating diagnostic dump; see $outfile for details"
    fi
    builtin echo
    builtin echo Diagnostic dump file created at: "$outfile"
    builtin echo
    builtin echo To share this with OMZ developers, post it as a gist on GitHub
    builtin echo at "https://gist.github.com" and share the link to the gist.
    builtin echo
    builtin echo "WARNING: This dump file contains all your zsh and omz configuration files,"
    builtin echo "so don't share it publicly if there's sensitive information in them."
    builtin echo
}
omz_termsupport_precmd () {
    emulate -L zsh
    if [[ "$DISABLE_AUTO_TITLE" == true ]]
    then
        return
    fi
    title $ZSH_THEME_TERM_TAB_TITLE_IDLE $ZSH_THEME_TERM_TITLE_IDLE
}
omz_termsupport_preexec () {
    emulate -L zsh
    setopt extended_glob
    if [[ "$DISABLE_AUTO_TITLE" == true ]]
    then
        return
    fi
    local CMD=${1[(wr)^(*=*|sudo|ssh|mosh|rake|-*)]:gs/%/%%}
    local LINE="${2:gs/%/%%}"
    title '$CMD' '%100>...>$LINE%<<'
}
omz_urldecode () {
    emulate -L zsh
    local encoded_url=$1
    local caller_encoding=$langinfo[CODESET]
    local LC_ALL=C
    export LC_ALL
    local tmp=${encoded_url:gs/+/ /}
    tmp=${tmp:gs/\\/\\\\/}
    tmp=${tmp:gs/%/\\x/}
    local decoded
    eval "decoded=\$'$tmp'"
    local safe_encodings
    safe_encodings=(UTF-8 utf8 US-ASCII)
    if [[ -z ${safe_encodings[(r)$caller_encoding]} ]]
    then
        decoded=$(echo -E "$decoded" | iconv -f UTF-8 -t $caller_encoding)
        if [[ $? != 0 ]]
        then
            echo "Error converting string from UTF-8 to $caller_encoding" >&2
            return 1
        fi
    fi
    echo -E "$decoded"
}
omz_urlencode () {
    emulate -L zsh
    zparseopts -D -E -a opts r m P
    local in_str=$1
    local url_str=""
    local spaces_as_plus
    if [[ -z $opts[(r)-P] ]]
    then
        spaces_as_plus=1
    fi
    local str="$in_str"
    local encoding=$langinfo[CODESET]
    local safe_encodings
    safe_encodings=(UTF-8 utf8 US-ASCII)
    if [[ -z ${safe_encodings[(r)$encoding]} ]]
    then
        str=$(echo -E "$str" | iconv -f $encoding -t UTF-8)
        if [[ $? != 0 ]]
        then
            echo "Error converting string from $encoding to UTF-8" >&2
            return 1
        fi
    fi
    local i byte ord LC_ALL=C
    export LC_ALL
    local reserved=';/?:@&=+$,'
    local mark='_.!~*''()-'
    local dont_escape="[A-Za-z0-9"
    if [[ -z $opts[(r)-r] ]]
    then
        dont_escape+=$reserved
    fi
    if [[ -z $opts[(r)-m] ]]
    then
        dont_escape+=$mark
    fi
    dont_escape+="]"
    local url_str=""
    for ((i = 1; i <= ${#str}; ++i )) do
        byte="$str[i]"
        if [[ "$byte" =~ "$dont_escape" ]]
        then
            url_str+="$byte"
        else
            if [[ "$byte" == " " && -n $spaces_as_plus ]]
            then
                url_str+="+"
            else
                ord=$(( [##16] #byte ))
                url_str+="%$ord"
            fi
        fi
    done
    echo -E "$url_str"
}
open_command () {
    emulate -L zsh
    setopt shwordsplit
    local open_cmd
    case "$OSTYPE" in
        (darwin*) open_cmd='open'  ;;
        (cygwin*) open_cmd='cygstart'  ;;
        (linux*) open_cmd='xdg-open'  ;;
        (msys*) open_cmd='start ""'  ;;
        (*) echo "Platform $OSTYPE not supported"
            return 1 ;;
    esac
    if [[ "$OSTYPE" == darwin* ]]
    then
        $open_cmd "$@" &> /dev/null
    else
        nohup $open_cmd "$@" &> /dev/null
    fi
}
parse_git_dirty () {
    local STATUS=''
    local FLAGS
    FLAGS=('--porcelain')
    if [[ "$(command git config --get oh-my-zsh.hide-dirty)" != "1" ]]
    then
        if [[ $POST_1_7_2_GIT -gt 0 ]]
        then
            FLAGS+='--ignore-submodules=dirty'
        fi
        if [[ "$DISABLE_UNTRACKED_FILES_DIRTY" == "true" ]]
        then
            FLAGS+='--untracked-files=no'
        fi
        STATUS=$(command git status ${FLAGS} 2> /dev/null | tail -n1)
    fi
    if [[ -n $STATUS ]]
    then
        echo "$ZSH_THEME_GIT_PROMPT_DIRTY"
    else
        echo "$ZSH_THEME_GIT_PROMPT_CLEAN"
    fi
}
prompt_char () {
    git branch > /dev/null 2> /dev/null && echo "%{$fg[green]%}±%{$reset_color%}" && return
    hg root > /dev/null 2> /dev/null && echo "%{$fg_bold[red]%}☿%{$reset_color%}" && return
    echo "%{$fg[cyan]%}◯ %{$reset_color%}"
}
pyenv_prompt_info () {
    return 1
}
rbenv () {
    local command
    command="$1"
    if [ "$#" -gt 0 ]
    then
        shift
    fi
    case "$command" in
        (rehash | shell) eval "$(rbenv "sh-$command" "$@")" ;;
        (*) command rbenv "$command" "$@" ;;
    esac
}
rbenv_prompt_info () {
    return 1
}
ruby_prompt_info () {
    echo $(rvm_prompt_info || rbenv_prompt_info || chruby_prompt_info)
}
rvm_prompt_info () {
    [ -f $HOME/.rvm/bin/rvm-prompt ] || return 1
    local rvm_prompt
    rvm_prompt=$($HOME/.rvm/bin/rvm-prompt ${=ZSH_THEME_RVM_PROMPT_OPTIONS} 2>/dev/null)
    [[ "${rvm_prompt}x" == "x" ]] && return 1
    echo "${ZSH_THEME_RVM_PROMPT_PREFIX:=(}${rvm_prompt}${ZSH_THEME_RVM_PROMPT_SUFFIX:=)}"
}
spectrum_bls () {
    for code in {000..255}
    do
        print -P -- "$code: %{$BG[$code]%}$ZSH_SPECTRUM_TEXT%{$reset_color%}"
    done
}
spectrum_ls () {
    for code in {000..255}
    do
        print -P -- "$code: %{$FG[$code]%}$ZSH_SPECTRUM_TEXT%{$reset_color%}"
    done
}
svn_prompt_info () {
    return 1
}
take () {
    mkdir -p $1
    cd $1
}
title () {
    emulate -L zsh
    setopt prompt_subst
    [[ "$EMACS" == *term* ]] && return
    : ${2=$1}
    case "$TERM" in
        (cygwin | xterm* | putty* | rxvt* | ansi) print -Pn "\e]2;$2:q\a"
            print -Pn "\e]1;$1:q\a" ;;
        (screen*) print -Pn "\ek$1:q\e\\" ;;
        (*) if [[ "$TERM_PROGRAM" == "iTerm.app" ]]
            then
                print -Pn "\e]2;$2:q\a"
                print -Pn "\e]1;$1:q\a"
            else
                if [[ -n "$terminfo[fsl]" ]] && [[ -n "$terminfo[tsl]" ]]
                then
                    echoti tsl
                    print -Pn "$1"
                    echoti fsl
                fi
            fi ;;
    esac
}
try_alias_value () {
    alias_value "$1" || echo "$1"
}
uninstall_oh_my_zsh () {
    env ZSH=$ZSH sh $ZSH/tools/uninstall.sh
}
up-line-or-beginning-search () {
    # undefined
    builtin autoload -XU
}
upgrade_oh_my_zsh () {
    env ZSH=$ZSH sh $ZSH/tools/upgrade.sh
}
url-quote-magic () {
    setopt localoptions noksharrays extendedglob
    local qkey="${(q)KEYS}"
    local -a reply match mbegin mend
    if [[ "$KEYS" != "$qkey" ]]
    then
        local lbuf="$LBUFFER$qkey"
        if [[ "${(Q)LBUFFER}$KEYS" == "${(Q)lbuf}" ]]
        then
            local -a words
            words=("${(@Q)${(z)lbuf}}")
            local urlseps urlmetas urlglobbers localschema otherschema
            if [[ "$words[-1]" == (#b)([^:]##):* ]]
            then
                zstyle -s ":url-quote-magic:$match[1]" url-seps urlseps ''
                zstyle -s ":url-quote-magic:$match[1]" url-metas urlmetas ''
            fi
            zstyle -s :url-quote-magic url-globbers urlglobbers '|'
            zstyle -s :urlglobber url-other-schema otherschema '|'
            if [[ "$words[1]" == ${~urlglobbers} ]]
            then
                zstyle -s :urlglobber url-local-schema localschema '|'
            else
                localschema=' '
            fi
            case "$words[-1]" in
                (*[\'\"]*)  ;;
                ((${~localschema}):/(|/localhost)/*) [[ "$urlseps" == *"$KEYS"* ]] && LBUFFER="$LBUFFER\\"  ;;
                ((${~otherschema}):*) [[ "$urlseps$urlmetas" == *"$KEYS"* ]] && LBUFFER="$LBUFFER\\"  ;;
            esac
        fi
    fi
    zle .self-insert
}
urlglobber () {
    local -a args globbed localschema otherschema reply
    local arg command="$1"
    shift
    zstyle -s :urlglobber url-local-schema localschema '|'
    zstyle -s :urlglobber url-other-schema otherschema '|'
    for arg
    do
        case "${arg}" in
            ((${~localschema}):/(|/localhost)/*) globbed=(${~${arg##ftp://(localhost|)}})
                args[$#args+1]=("${(M)arg##(${~localchema})://(localhost|)}${(@)^globbed}")  ;;
            ((${~otherschema}):*) args[${#args}+1]="$arg"  ;;
            (*) args[${#args}+1]=(${~arg})  ;;
        esac
    done
    "$command" "${(@)args}"
}
vi_mode_prompt_info () {
    return 1
}
virtualenv_prompt_info () {
    return 1
}
work_in_progress () {
    if $(git log -n 1 2>/dev/null | grep -q -c "\-\-wip\-\-")
    then
        echo "WIP!!"
    fi
}
zle-line-finish () {
    echoti rmkx
}
zle-line-init () {
    echoti smkx
}
zsh_stats () {
    fc -l 1 | awk '{CMD[$2]++;count++;}END { for (a in CMD)print CMD[a] " " CMD[a]/count*100 "% " a;}' | grep -v "./" | column -c3 -s " " -t | sort -nr | nl | head -n20
}
```

So I immediately went into my `Visual Studio Code` **editor** and changed the directory I named `functions` to `functionsDir`. So if you are ***using*** `zshell` and therefore ***don’t need to use*** `cd` to **change into** ***directories***, ***don’t name*** any **directories** `functions`. ***Apparently***, I **pulled up** the ***functions manual*** for my `iTerm2`. I ***checked this out*** by **typing** `man functions` in `iTerm2` and came up with the above. I’m sure the concept is the **same** with `bash`.

Yet another reason to get to know `Command Line` ***intimately***!

Yet another reason to get to know Command Line intimately!