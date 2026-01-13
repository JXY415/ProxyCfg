/**
 * Clash Meta (Mihomo) 配置生成脚本
 * 
 * 下方 USER_CONFIG 为用户自定义配置区域
 * 脚本会读取该配置并生成最终的 Clash 配置文件
 */

// ============================================
// 常量定义 (Constants)
// ============================================
const CONSTANTS = {
    // 图标 URL 集中管理
    ICONS: {
        // 地区图标
        HK: "https://gcore.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Hong_Kong.png",
        MO: "https://gcore.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Macao.png",
        TW: "https://gcore.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Taiwan.png",
        JP: "https://gcore.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Japan.png",
        SG: "https://gcore.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Singapore.png",
        US: "https://gcore.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/United_States.png",
        KR: "https://gcore.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Korea.png",
        CA: "https://gcore.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Canada.png",
        UK: "https://gcore.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/United_Kingdom.png",
        FR: "https://gcore.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/France.png",
        DE: "https://gcore.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Germany.png",
        NL: "https://gcore.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Netherlands.png",
        TR: "https://gcore.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Turkey.png",
        // 服务图标
        TELEGRAM: "https://gcore.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Telegram.png",
        YOUTUBE: "https://gcore.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/YouTube.png",
        TIKTOK: "https://gcore.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/TikTok.png",
        X: "https://gcore.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/X.png",
        AI: "https://gcore.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/ChatGPT.png",
        MICROSOFT: "https://gcore.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Microsoft.png",
        NETFLIX: "https://gcore.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Netflix.png",
        SPOTIFY: "https://gcore.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Spotify.png",
        ONEDRIVE: "https://gcore.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/OneDrive.png",
        GITHUB: "https://gcore.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/GitHub.png",
        APPLE: "https://gcore.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Apple.png",
        GOOGLE: "https://gcore.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Google_Search.png",
        GOOGLE_FCM: "https://gcore.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Google.png",
        STEAM: "https://gcore.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Steam.png",
        GAME: "https://gcore.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Game.png",
        SPEEDTEST: "https://gcore.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Speedtest.png",
        BILIBILI: "https://gcore.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/bilibili.png",
        EMBY: "https://gcore.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Emby.png",
        LINE: "https://gcore.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Line.png",
        SOCIAL: "https://gcore.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Area.png",
        AMAZON: "https://gcore.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Amazon.png",

        // 策略图标
        FOREIGN_MEDIA: "https://gcore.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/ForeignMedia.png",
        FINAL: "https://gcore.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Final.png",
        PROXY: "https://gcore.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Proxy.png",
        DIRECT: "https://gcore.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Direct.png",
        BYPASS: "https://gcore.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Bypass.png",
        IEPL: "https://gcore.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/IEPL.png",
        CHEAP: "https://gcore.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Cheap.png",
        SELECT: "https://gcore.jsdelivr.net/gh/shindgewongxj/WHATSINStash@master/icon/select.png",
        ADBLOCK: "https://gcore.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/AdBlack.png",
        GLOBAL: "https://gcore.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Global.png",
    },
    // 默认值
    DEFAULTS: {
        // TEST_URL: "https://cp.cloudflare.com/generate_204",
        TEST_URL: "https://www.gstatic.com/generate_204",
        TEST_INTERVAL: 300,
        RULE_UPDATE_INTERVAL: 86400,
    },
    // 策略组名称 (统一管理)
    GROUP_NAMES: {
        SELECT: "代理选择",
        MANUAL: "手动切换",
        FALLBACK: "故障转移",
        GLOBAL: "GLOBAL",
    }
};

// ============================================
// 用户配置区域
// ============================================
const USER_CONFIG = {
    // 基础功能开关
    // 说明：可通过 URL 参数覆盖 (例如 &ipv6=true)
    features: {
        ipv6: false,
        fakeip: false,
        loadBalance: false,
        quic: false,
        keepalive: false,
        fullConfig: false,
        countryThreshold: 0,
        sniffer: true,
    },
    // 策略组名称映射 (已合并至 autoGroups，保留此对象用于兼容旧逻辑引用，后续需重构逻辑)
    // 建议直接在代码中使用字符串常量或 autoGroups
    groupNames: {
        SELECT: "代理选择",
        MANUAL: "手动切换",
        FALLBACK: "故障转移",
        GLOBAL: "GLOBAL",
    },
    // 规则集 (Rule Providers) 引用
    // 说明：配置外部规则文件源，用于分流
    ruleProviders: {
        ADBlock: {
            type: "http",
            behavior: "domain",
            format: "mrs",
            interval: 86400,
            url: "https://adrules.top/adrules-mihomo.mrs",
            path: "./ruleset/ADBlock.mrs",
        },
        AethersailorCustomDirect: {
            type: "http",
            behavior: "classical",
            format: "text",
            interval: 86400,
            url: "https://gcore.jsdelivr.net/gh/Aethersailor/Custom_OpenClash_Rules@main/rule/Custom_Direct.list",
            path: "./ruleset/Custom_Direct.list",
        },
        AethersailorCustomProxy: {
            type: "http",
            behavior: "classical",
            format: "text",
            interval: 86400,
            url: "https://gcore.jsdelivr.net/gh/Aethersailor/Custom_OpenClash_Rules@main/rule/Custom_Proxy.list",
            path: "./ruleset/Custom_Proxy.list",
        },
        SteamCDN: {
            type: "http",
            behavior: "classical",
            format: "text",
            interval: 86400,
            url: "https://gcore.jsdelivr.net/gh/Aethersailor/Custom_OpenClash_Rules@main/rule/Steam_CDN.list",
            path: "./ruleset/Steam_CDN.list",
        },
        AiDomain: {
            type: "http",
            behavior: "classical",
            format: "text",
            interval: 86400,
            url: "https://gcore.jsdelivr.net/gh/JXY415/ProxyCfg@main/Mihomo/Rules/AI.list",
            path: "./ruleset/AiDomain.list",
        },
    },
    // 自定义策略组
    // 说明：定义特定 APP 或场景使用的策略组 (例如 YouTube, Telegram 等)
    // 格式：{ name: "组名", icon: "图标URL", proxies: ["引用组1", "引用组2"] }
    customGroups: [
        {
            name: "Telegram",
            icon: CONSTANTS.ICONS.TELEGRAM,
            proxies: ["DEFAULT_PROXIES"]
        },
        {
            name: "YouTube",
            icon: CONSTANTS.ICONS.YOUTUBE,
            proxies: ["DEFAULT_PROXIES"]
        },
        {
            name: "TikTok",
            icon: CONSTANTS.ICONS.TIKTOK,
            proxies: ["DEFAULT_PROXIES"]
        },
        {
            name: "X(Twitter)",
            icon: CONSTANTS.ICONS.X,
            proxies: ["DEFAULT_PROXIES"]
        },
        {
            name: "AI服务",
            icon: CONSTANTS.ICONS.AI,
            proxies: ["AI_PROXIES"]
        },
        {
            name: "即时通讯",
            icon: CONSTANTS.ICONS.LINE,
            proxies: ["DEFAULT_PROXIES"]
        },
        {
            name: "社交媒体",
            icon: CONSTANTS.ICONS.SOCIAL,
            proxies: ["DEFAULT_PROXIES"]
        },
        {
            name: "GitHub",
            icon: CONSTANTS.ICONS.GITHUB,
            proxies: ["DEFAULT_PROXIES"]
        },
        {
            name: "OneDrive",
            icon: CONSTANTS.ICONS.ONEDRIVE,
            proxies: ["DIRECT_PRIORITY_PROXIES"]
        },
        {
            name: "苹果服务",
            icon: CONSTANTS.ICONS.APPLE,
            proxies: ["DIRECT_PRIORITY_PROXIES"]
        },
        {
            name: "微软服务",
            icon: CONSTANTS.ICONS.MICROSOFT,
            proxies: ["DIRECT_PRIORITY_PROXIES"]
        },
        {
            name: "谷歌FCM",
            icon: CONSTANTS.ICONS.GOOGLE_FCM,
            proxies: ["DIRECT", "SELECT"]
        },
        {
            name: "谷歌服务",
            icon: CONSTANTS.ICONS.GOOGLE,
            proxies: ["DEFAULT_PROXIES"]
        },
        {
            name: "Netflix",
            icon: CONSTANTS.ICONS.NETFLIX,
            proxies: ["STREAMING_PROXIES"]
        },
        {
            name: "Bilibili",
            icon: CONSTANTS.ICONS.BILIBILI,
            proxies: ["DIRECT", "台湾节点", "香港节点", "澳门节点", "SELECT"]
        },
        {
            name: "Spotify",
            icon: CONSTANTS.ICONS.SPOTIFY,
            proxies: ["STREAMING_PROXIES"]
        },
        {
            name: "Emby",
            icon: CONSTANTS.ICONS.EMBY,
            proxies: ["DEFAULT_PROXIES"]
        },
        {
            name: "Steam",
            icon: CONSTANTS.ICONS.STEAM,
            proxies: ["DIRECT_PRIORITY_PROXIES"]
        },
        {
            name: "游戏平台",
            icon: CONSTANTS.ICONS.GAME,
            proxies: ["DIRECT_PRIORITY_PROXIES"]
        },
        {
            name: "广告拦截",
            icon: CONSTANTS.ICONS.ADBLOCK,
            proxies: ["REJECT", "REJECT-DROP", "DIRECT"],
        },
        {
            name: "测速工具",
            icon: CONSTANTS.ICONS.SPEEDTEST,
            proxies: ["DIRECT_PRIORITY_PROXIES"]
        },
        {
            name: "国外媒体",
            icon: CONSTANTS.ICONS.FOREIGN_MEDIA,
            proxies: ["STREAMING_PROXIES"]
        },
        {
            name: "国外电商",
            icon: CONSTANTS.ICONS.AMAZON,
            proxies: ["DEFAULT_PROXIES"]
        },
        {
            name: "Final",
            icon: CONSTANTS.ICONS.FINAL,
            proxies: ["SELECT", "DIRECT", "FALLBACK"]
        }
    ],
    // 分流规则
    // 说明：规则自上而下匹配，匹配即停止。请注意顺序！
    rules: [
        "RULE-SET,ADBlock,广告拦截",

        "GEOSITE,private,DIRECT",
        "GEOIP,private,DIRECT,no-resolve",

        /* Aethersailor收录的直连域名规则 */
        "RULE-SET,AethersailorCustomDirect,DIRECT",
        /* Aethersailor收录的代理域名规则 */
        "RULE-SET,AethersailorCustomProxy,SELECT",

        "GEOSITE,cn,DIRECT",
        "GEOIP,cn,DIRECT,no-resolve",
        /* 谷歌在国内可用的域名强制直连 */
        "GEOSITE,google-cn,DIRECT",
        /* 游戏在国内可用的域名强制直连 */
        "GEOSITE,category-games@cn,DIRECT",
        /* SteamCDN强制直连 */
        "RULE-SET,SteamCDN,DIRECT",
        /* 各大游戏平台下载域名强制直连 */
        "GEOSITE,category-game-platforms-download,DIRECT",
        /* BT Tracker 相关域名强制直连 */
        "GEOSITE,category-public-tracker,DIRECT",

        /* AI服务 */
        "RULE-SET,AiDomain,AI服务",

        /* 即时通讯 */
        "GEOSITE,telegram,Telegram",
        "GEOIP,telegram,Telegram,no-resolve",
        "GEOSITE,category-communication,即时通讯",

        /* 社交媒体 */
        "GEOSITE,tiktok,TikTok",
        "GEOSITE,x,X(Twitter)",
        "GEOSITE,category-social-media-!cn,社交媒体",

        /* Steam等游戏平台 */
        "GEOSITE,steam,Steam",
        "GEOSITE,category-games,游戏平台",

        /* GitHub */
        "GEOSITE,github,GitHub",

        /* OneDrive */
        "GEOSITE,onedrive,OneDrive",

        /* 流媒体 */
        "GEOSITE,youtube,YouTube",
        "GEOSITE,netflix,Netflix",
        "GEOIP,netflix,Netflix,no-resolve",
        /*
        "GEOSITE,disney,DisneyPlus",
        "GEOSITE,hbo,HBO",
        "GEOSITE,primevideo,PrimeVideo",
        "GEOSITE,bahamut,Bahamut",
        */
        "GEOSITE,bilibili,Bilibili",
        "GEOSITE,spotify,Spotify",

        /* Emby 包括主流 Emby 服务相关域名 */
        "GEOSITE,category-emby,Emby",
        "GEOSITE,apple,苹果服务",
        "GEOSITE,microsoft,微软服务",
        "GEOSITE,googlefcm,谷歌FCM",
        "GEOSITE,google,谷歌服务",
        "GEOIP,google,谷歌服务,no-resolve",

        /* 测速工具包括 SpeedTest 等主流测速工具域名*/
        "GEOSITE,category-speedtest,测速工具",

        /* 国外媒体 */
        "GEOSITE,category-entertainment,国外媒体",

        /* 国外电商 */
        "GEOSITE,category-ecommerce,国外电商",

        /* GFW */
        "GEOSITE,gfw,SELECT",
        "MATCH,Final"
    ],
    // 自动策略组 (地区与其他)
    // 说明：
    // type: "Select" (手动选择), "URL-Test" (自动测速), "Fallback" (故障转移)
    // pattern: 正则表达式匹配节点名称
    // isRegion: true (标记为地区组，用于"其他地区"的互斥排除逻辑，特殊组请勿开启)
    // tags: 标签数组，用于占位符匹配 (streaming=流媒体, ai=AI服务, general=通用)
    autoGroups: [
        // 地区分组
        {
            type: "URL-Test",
            name: "香港节点",
            pattern: "香港|港|HK|hk|Hong Kong|HongKong|hongkong|🇭🇰",
            isRegion: true,
            tags: ["streaming", "general"],
            icon: CONSTANTS.ICONS.HK
        },
        {
            type: "URL-Test",
            name: "澳门节点",
            pattern: "澳门|Macau|Macao|CTM|🇲🇴",
            isRegion: true,
            tags: ["general"],
            icon: CONSTANTS.ICONS.MO
        },
        {
            type: "URL-Test",
            name: "美国节点",
            pattern: "美|美国|US|United States|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|华盛顿|亚特兰大|旧金山|丹佛|US|USA|United States|UnitedStates|America|🇺🇸",
            isRegion: true,
            tags: ["streaming", "ai", "general"],
            icon: CONSTANTS.ICONS.US
        },
        {
            type: "URL-Test",
            name: "日本节点",
            pattern: "日本|川日|东京|大阪|泉日|埼玉|沪日|深日|JP|Japan|🇯🇵",
            isRegion: true,
            tags: ["streaming", "ai", "general"],
            icon: CONSTANTS.ICONS.JP
        },
        {
            type: "URL-Test",
            name: "新加坡节点",
            pattern: "新加坡|坡|狮城|SG|Singapore|🇸🇬",
            isRegion: true,
            tags: ["streaming", "ai", "general"],
            icon: CONSTANTS.ICONS.SG
        },
        {
            type: "URL-Test",
            name: "台湾节点",
            pattern: "台|新北|彰化|TW|Taiwan|🇹🇼",
            isRegion: true,
            tags: ["streaming", "general"],
            icon: CONSTANTS.ICONS.TW
        },
        {
            type: "URL-Test",
            name: "韩国节点",
            pattern: "KR|Korea|KOR|首尔|韩|韓|🇰🇷",
            isRegion: true,
            tags: ["streaming", "general"],
            icon: CONSTANTS.ICONS.KR
        },
        {
            type: "URL-Test",
            name: "加拿大节点",
            pattern: "加拿大|Canada|CA|🇨🇦",
            isRegion: true,
            tags: ["general"],
            icon: CONSTANTS.ICONS.CA
        },
        {
            type: "URL-Test",
            name: "英国节点",
            pattern: "英国|UK|United Kingdom|伦敦|London|🇬🇧",
            isRegion: true,
            tags: ["streaming", "general"],
            icon: CONSTANTS.ICONS.UK
        },
        {
            type: "URL-Test",
            name: "法国节点",
            pattern: "法国|法|FR|France|🇫🇷",
            isRegion: true,
            tags: ["general"],
            icon: CONSTANTS.ICONS.FR
        },
        {
            type: "URL-Test",
            name: "德国节点",
            pattern: "德国|德|DE|Germany|🇩🇪",
            isRegion: true,
            tags: ["general"],
            icon: CONSTANTS.ICONS.DE
        },
        {
            type: "URL-Test",
            name: "荷兰节点",
            pattern: "荷兰|NL|Netherlands|Amsterdam|阿姆斯特丹|🇳🇱",
            isRegion: true,
            tags: ["general"],
            icon: CONSTANTS.ICONS.NL
        },
        {
            type: "URL-Test",
            name: "土耳其节点",
            pattern: "土耳其|TR|Turkey|Türkiye|Istanbul|伊斯坦布尔|🇹🇷",
            isRegion: true,
            tags: ["general"],
            icon: CONSTANTS.ICONS.TR
        },

        // 特殊分组 (不需要 tags，因为它们是独立的功能组)
        {
            type: "Select",
            name: "专线服务",
            pattern: "(?i)IEPL|IPLC|专线",
            tags: ["general"],
            icon: CONSTANTS.ICONS.IEPL
        },
        {
            type: "Select",
            name: "奈飞节点",
            pattern: "(?i)NF|Netflix|奈飞|奈菲|解锁",
            tags: ["general"],
            icon: CONSTANTS.ICONS.NETFLIX
        },
        {
            type: "Select",
            name: "低倍率节点",
            pattern: "(?i)0\\.[0-5]|低倍率",
            tags: ["general"],
            icon: CONSTANTS.ICONS.CHEAP
        },

        // 兜底分组 (自动匹配所有未归类的节点)
        {
            type: "Select",
            name: "其他地区",
            pattern: ".*",
            icon: CONSTANTS.ICONS.GLOBAL
        }
    ],

    // 占位符预设配置 (Proxy Presets)
    // 说明：使用 order 数组定义占位符展开顺序，更直观灵活
    // 可用占位符：
    //   CORE           - 核心组 [代理选择, 手动切换, 故障转移]
    //   SELECT         - 单独的代理选择组
    //   MANUAL         - 单独的手动切换组
    //   FALLBACK       - 单独的故障转移组
    //   DIRECT         - Clash 内置直连策略
    //   GENERAL_REGIONS   - 匹配 general tag 的地区组
    //   STREAMING_REGIONS - 匹配 streaming tag 的地区组
    //   AI_REGIONS        - 匹配 ai tag 的地区组
    proxyPresets: {
        DEFAULT_PROXIES: {
            order: ["CORE", "GENERAL_REGIONS", "DIRECT"]
        },
        DIRECT_PRIORITY_PROXIES: {
            order: ["DIRECT", "CORE", "GENERAL_REGIONS"]
        },
        STREAMING_PROXIES: {
            order: ["CORE", "STREAMING_REGIONS", "DIRECT"]
        },
        AI_PROXIES: {
            order: ["CORE", "AI_REGIONS", "DIRECT"]
        }
    },

    // ============================================
    // 基础配置 (baseConfig) - 总是生成
    // ============================================
    baseConfig: {
        // DNS 配置 (来自 Default.yaml)
        dns: {
            enable: true,
            "use-hosts": false,
            "use-system-hosts": false,
            "respect-rules": false,
            "fake-ip-range": "198.18.0.1/16",
            "default-nameserver": [
                "tls://223.5.5.5"
            ],
            nameserver: [
                "https://doh.pub/dns-query",
                "https://dns.alidns.com/dns-query"
            ],
            "proxy-server-nameserver": [
                "https://doh.pub/dns-query",
                "https://dns.alidns.com/dns-query"
            ],
            "direct-nameserver": [],
            fallback: [
                /*
                "https://dns.cloudflare.com/dns-query",
                "https://dns.google/dns-query"
                */
            ],
            "fallback-filter": {
                geoip: true,
                "geoip-code": "CN",
                ipcidr: ["240.0.0.0/4", "0.0.0.0/32"],
                domain: ["+.google.com", "+.facebook.com", "+.youtube.com"]
            },
            "fake-ip-filter": [
                "*",
                "+.lan",
                "+.local",
                "time.*.com",
                "ntp.*.com",
                "+.market.xiaomi.com"
            ]
        },
        // Sniffer 配置 (来自 Default.yaml)
        sniffer: {
            enable: true,
            "parse-pure-ip": true,
            "force-dns-mapping": true,
            "override-destination": false,
            sniff: {
                HTTP: { ports: [80, 443], "override-destination": false },
                TLS: { ports: [443] },
                QUIC: { ports: [443] }
            },
            "skip-domain": [
                "+.push.apple.com"
            ],
            "skip-dst-address": [
                "91.105.192.0/23",
                "91.108.4.0/22",
                "91.108.8.0/21",
                "91.108.16.0/21",
                "91.108.56.0/22",
                "95.161.64.0/20",
                "149.154.160.0/20",
                "185.76.151.0/24",
                "2001:67c:4e8::/48",
                "2001:b28:f23c::/47",
                "2001:b28:f23f::/48",
                "2a0a:f280:203::/48"
            ]
        },
        // GEO 数据配置
        geo: {
            "geo-auto-update": true,
            "geo-update-interval": 12,
            "geodata-mode": true,
            "geox-url": {
                geoip: "https://gcore.jsdelivr.net/gh/Loyalsoldier/v2ray-rules-dat@release/geoip.dat",
                geosite: "https://gcore.jsdelivr.net/gh/Loyalsoldier/v2ray-rules-dat@release/geosite.dat",
                mmdb: "https://gcore.jsdelivr.net/gh/Loyalsoldier/geoip@release/Country.mmdb",
                asn: "https://gcore.jsdelivr.net/gh/Loyalsoldier/geoip@release/GeoLite2-ASN.mmdb"
            }
        },
        // Profile 配置
        profile: {
            "store-selected": true,
            "store-fake-ip": true
        }
    },

    // ============================================
    // 完整配置 (fullModeConfig) - fullConfig=true 时追加 (来自 Default.yaml)
    // ============================================
    fullModeConfig: {
        "external-controller": "",
        ipv6: true,
        mode: "rule",
        "mixed-port": 7890,
        "socks-port": 7891,
        port: 7892,
        "redir-port": 0,
        "tproxy-port": 0,
        "allow-lan": false,
        "unified-delay": true,
        "tcp-concurrent": false,
        "log-level": "info",
        "find-process-mode": "strict",
        "bind-address": "*",
        "lan-allowed-ips": ["0.0.0.0/0", "::/0"],
        "lan-disallowed-ips": [],
        authentication: [],
        "skip-auth-prefixes": ["127.0.0.1/32", "::1/128"],
        tun: {
            enable: false,
            device: "Mihomo",
            stack: "mixed",
            "auto-route": true,
            "auto-redirect": false,
            "auto-detect-interface": true,
            "dns-hijack": ["any:53"],
            "route-exclude-address": [],
            mtu: 1500
        }
    }
};

// ============================================
// 脚本核心逻辑 (一般无需修改)
// ============================================

// 工具函数
function parseBool(e) {
    return "boolean" == typeof e ? e : "string" == typeof e && ("true" === e.toLowerCase() || "1" === e);
}

function parseNumber(e, t = 0) {
    if (null == e) return t;
    const o = parseInt(e, 10);
    return isNaN(o) ? t : o;
}

function getRunConfig() {
    const args = "undefined" != typeof $arguments ? $arguments : {};
    return {
        loadBalance: parseBool(args.loadBalance) || USER_CONFIG.features.loadBalance,
        ipv6Enabled: parseBool(args.ipv6) || USER_CONFIG.features.ipv6,
        fullConfig: parseBool(args.full) || USER_CONFIG.features.fullConfig,
        keepAliveEnabled: parseBool(args.keepalive) || USER_CONFIG.features.keepalive,
        fakeIPEnabled: parseBool(args.fakeip) || USER_CONFIG.features.fakeip,
        quicEnabled: parseBool(args.quic) || USER_CONFIG.features.quic,
        snifferEnabled: parseBool(args.sniffer) || USER_CONFIG.features.sniffer,
        countryThreshold: parseNumber(args.threshold, USER_CONFIG.features.countryThreshold)
    };
}

const buildList = (...e) => e.flat().filter(Boolean);

// ============================================
// 策略组构建器 (Builder Pattern)
// ============================================
const GroupBuilder = {
    createSelectGroup(name, proxies, icon) {
        return { name, type: "select", proxies, icon };
    },

    createUrlTestGroup(name, proxies, icon, url = CONSTANTS.DEFAULTS.TEST_URL) {
        return {
            name,
            type: "url-test",
            proxies,
            icon,
            url,
            interval: CONSTANTS.DEFAULTS.TEST_INTERVAL
        };
    },

    createLoadBalanceGroup(name, proxies, icon, url = CONSTANTS.DEFAULTS.TEST_URL) {
        return {
            name,
            type: "load-balance",
            proxies,
            icon,
            url,
            interval: CONSTANTS.DEFAULTS.TEST_INTERVAL,
            strategy: "consistent-hashing"
        };
    },

    createFallbackGroup(name, proxies, icon, url = CONSTANTS.DEFAULTS.TEST_URL) {
        return {
            name,
            type: "fallback",
            proxies,
            icon,
            url,
            interval: CONSTANTS.DEFAULTS.TEST_INTERVAL
        };
    }
};

// 规则处理函数 (更安全的替换逻辑)
function processRules(rules, groupNameMap) {
    return rules.map(rule => {
        const parts = rule.split(",");
        const target = parts[parts.length - 1];

        // 只替换规则目标 (最后一个逗号后的内容)
        if (groupNameMap[target]) {
            parts[parts.length - 1] = groupNameMap[target];
        }

        return parts.join(",");
    });
}

// 核心逻辑：解析自动策略组
function buildAutoGroups(proxies, config) {
    const list = proxies || [];

    // 早期返回：无节点时的处理
    if (list.length === 0) {
        console.warn("[Clash Config] 警告: 没有可用的代理节点");
        return { groups: [], groupNames: [] };
    }

    const groups = [];
    const autoGroupDetails = []; // 存储生成的组名，用于后续引用

    // 1. 遍历配置生成组
    for (const def of USER_CONFIG.autoGroups) {
        // 兜底组特殊处理 (在最后)
        if (def.pattern === ".*") continue;

        // 安全解析正则表达式
        let regex;
        try {
            regex = new RegExp(def.pattern.replace(/^\(\?i\)/, ""), "i");
        } catch (e) {
            console.error(`[Clash Config] 错误: 无效的正则表达式 "${def.pattern}" - ${e.message}`);
            continue;
        }

        const matchedProxies = list.filter(p => regex.test(p.name)).map(p => p.name);

        // 应用阈值过滤
        if (matchedProxies.length > 0 && matchedProxies.length >= config.countryThreshold) {
            // 使用 GroupBuilder 创建策略组
            let group;
            if (def.type === "URL-Test") {
                group = config.loadBalance
                    ? GroupBuilder.createLoadBalanceGroup(def.name, matchedProxies, def.icon)
                    : GroupBuilder.createUrlTestGroup(def.name, matchedProxies, def.icon);
            } else if (def.type === "Fallback") {
                group = GroupBuilder.createFallbackGroup(def.name, matchedProxies, def.icon);
            } else {
                group = GroupBuilder.createSelectGroup(def.name, matchedProxies, def.icon);
            }

            groups.push(group);
            autoGroupDetails.push(def.name);
        }
    }

    // 2. 处理"其他地区" (兜底)
    // 逻辑：所有未被"地区类"规则匹配到的节点。
    // 使用 isRegion: true 标记来判断哪些组是互斥的地区组。

    // 获取兜底配置
    const fallbackDef = USER_CONFIG.autoGroups.find(d => d.pattern === ".*");
    if (fallbackDef) {
        // 关键逻辑：只排除带有 isRegion: true 的组的匹配模式
        // 这样特殊组(如IEPL)的匹配就不会影响节点进入"其他地区"
        const regionPatterns = USER_CONFIG.autoGroups
            .filter(d => d.isRegion && d.pattern !== ".*")
            .map(d => new RegExp(d.pattern.replace(/^\(\?i\)/, ""), "i"));

        const otherProxies = list.filter(p => {
            return !regionPatterns.some(regex => regex.test(p.name));
        }).map(p => p.name);

        if (otherProxies.length > 0) {
            groups.push({
                name: fallbackDef.name,
                type: "select",
                proxies: otherProxies,
                icon: fallbackDef.icon
            });
            autoGroupDetails.push(fallbackDef.name);
        }
    }

    return { groups, groupNames: autoGroupDetails };
}

// 核心逻辑：创建基础引用列表 (基于 order 数组解析)
function buildBaseLists(autoGroupNames, config) {
    const G = USER_CONFIG.groupNames;

    // 地区组列表 (用于故障转移)
    const regionGroups = USER_CONFIG.autoGroups
        .filter(d => d.isRegion && autoGroupNames.includes(d.name))
        .map(d => d.name);

    // 根据 tag 获取匹配的地区组名称
    const getGroupsByTag = (tag) => {
        return USER_CONFIG.autoGroups
            .filter(d => d.tags && d.tags.includes(tag) && autoGroupNames.includes(d.name))
            .map(d => d.name);
    };

    // 占位符映射表
    const placeholderMap = {
        // 核心组
        "CORE": [G.SELECT, G.MANUAL, G.FALLBACK],
        "SELECT": [G.SELECT],
        "MANUAL": [G.MANUAL],
        "FALLBACK": [G.FALLBACK],
        "DIRECT": ["DIRECT"],
        // 地区组 (动态生成)
        "GENERAL_REGIONS": getGroupsByTag("general"),
        "STREAMING_REGIONS": getGroupsByTag("streaming"),
        "AI_REGIONS": getGroupsByTag("ai")
    };

    // 根据 proxyPreset 配置生成代理列表
    const buildPresetProxies = (presetName) => {
        const preset = USER_CONFIG.proxyPresets[presetName];
        if (!preset || !preset.order) return [];

        // 展开 order 数组中的所有占位符
        return preset.order.flatMap(placeholder => {
            return placeholderMap[placeholder] || [placeholder];
        });
    };

    // 自动遍历 proxyPresets 生成所有占位符
    const result = {};
    for (const [presetName, preset] of Object.entries(USER_CONFIG.proxyPresets || {})) {
        result[presetName] = buildPresetProxies(presetName);
    }

    // 故障转移用 (固定逻辑)
    result.fallbackProxies = buildList(regionGroups, G.MANUAL, "DIRECT");

    return result;
}

// 脚本入口函数
function main(params) {
    const config = getRunConfig();
    const proxies = params.proxies;

    // 统计和生成自动策略组 (包含地区组、特殊组、兜底组)
    const { groups: autoGroups, groupNames: autoGroupNames } = buildAutoGroups(proxies, config);

    // 准备引用列表 (动态生成所有预设)
    const proxyLists = buildBaseLists(autoGroupNames, config);
    const { fallbackProxies } = proxyLists;

    // 分离 autoGroups 为地区组、特殊组、兜底组
    const regionGroupDefs = USER_CONFIG.autoGroups.filter(d => d.isRegion);
    const specialGroupDefs = USER_CONFIG.autoGroups.filter(d => !d.isRegion && d.pattern !== ".*");
    const fallbackGroupDef = USER_CONFIG.autoGroups.find(d => d.pattern === ".*");

    const regionGroupNames = regionGroupDefs.map(d => d.name).filter(n => autoGroupNames.includes(n));
    const specialGroupNames = specialGroupDefs.map(d => d.name).filter(n => autoGroupNames.includes(n));
    const fallbackGroupName = fallbackGroupDef && autoGroupNames.includes(fallbackGroupDef.name) ? fallbackGroupDef.name : null;

    // 组装所有策略组
    const allGroups = [];
    const G = USER_CONFIG.groupNames;

    // 1. 核心入口组
    // SELECT (主入口) - 包含地区节点 + 手动 + 直连
    allGroups.push({
        name: G.SELECT,
        type: "select",
        proxies: buildList(G.MANUAL, regionGroupNames, "DIRECT"),
        icon: CONSTANTS.ICONS.PROXY
    });

    // MANUAL (手动)
    allGroups.push({
        name: G.MANUAL,
        type: "select",
        "include-all": true,
        icon: CONSTANTS.ICONS.SELECT
    });

    // 2. 用户自定义组 (功能策略组，如 Telegram, Netflix 等)
    // 提到前面，方便用户快速开关
    const replacePlaceholders = (list) => {
        return list.flatMap(item => {
            // 动态匹配 proxyPresets 中的所有预设
            if (proxyLists[item]) return proxyLists[item];
            if (item === "SELECT") return [G.SELECT];
            if (item === "DIRECT") return ["DIRECT"]; // 使用 Clash 内置 DIRECT
            if (item === "FALLBACK") return [G.FALLBACK];

            // 如果引用了某个自动组但该组未生成(无节点)，则忽略
            if (item.endsWith("节点") && !autoGroupNames.includes(item)) {
                return [];
            }

            return [item];
        });
    };

    // 分离 Final 和其他自定义组
    const finalGroup = USER_CONFIG.customGroups.find(g => g.name === "Final");
    const otherCustomGroups = USER_CONFIG.customGroups.filter(g => g.name !== "Final");

    for (const custom of otherCustomGroups) {
        allGroups.push({
            ...custom,
            type: custom.type || "select",
            proxies: replacePlaceholders(custom.proxies)
        });
    }

    // 3. 特殊节点组 (IEPL, 低倍率等)
    const specialGroups = autoGroups.filter(g => specialGroupNames.includes(g.name));
    allGroups.push(...specialGroups);

    // 4. 地区节点组 (香港、日本等)
    const regionGroups = autoGroups.filter(g => regionGroupNames.includes(g.name));
    allGroups.push(...regionGroups);

    // 5. 其他地区 (兜底)
    if (fallbackGroupName) {
        const fallbackGroup = autoGroups.find(g => g.name === fallbackGroupName);
        if (fallbackGroup) allGroups.push(fallbackGroup);
    }

    // 6. Final 组 (最终兜底，放在靠后)
    if (finalGroup) {
        allGroups.push({
            ...finalGroup,
            type: finalGroup.type || "select",
            proxies: replacePlaceholders(finalGroup.proxies)
        });
    }

    // 7. 故障转移组 (系统级，垫底)
    allGroups.push(GroupBuilder.createFallbackGroup(G.FALLBACK, fallbackProxies, CONSTANTS.ICONS.BYPASS));

    const allGroupNames = allGroups.map(g => g.name);

    // 8. 全局组
    allGroups.push({
        name: G.GLOBAL,
        type: "select",
        "include-all": true,
        proxies: allGroupNames
    });

    // 处理分流规则 (使用安全的替换逻辑)
    const groupNameMap = {
        "SELECT": G.SELECT,
        "DIRECT": G.DIRECT,
        "FALLBACK": G.FALLBACK
    };
    const finalRules = processRules(USER_CONFIG.rules, groupNameMap);

    if (!config.quicEnabled) {
        finalRules.unshift("AND,((DST-PORT,443),(NETWORK,UDP)),REJECT");
    }

    // 返回最终配置
    // 构建 DNS 配置 (合并用户配置与动态设置)
    const dnsConfig = {
        ...USER_CONFIG.baseConfig.dns,
        ipv6: config.ipv6Enabled,
        "enhanced-mode": config.fakeIPEnabled ? "fake-ip" : "redir-host"
    };
    if (!config.fakeIPEnabled) {
        delete dnsConfig["fake-ip-filter"];
        delete dnsConfig["fake-ip-range"];
    }

    // 构建 Sniffer 配置 (根据开关动态调整)
    let snifferConfig = null;
    if (config.snifferEnabled) {
        snifferConfig = {
            ...USER_CONFIG.baseConfig.sniffer
        };
        // 根据 quic 开关控制 QUIC 嗅探
        if (!config.quicEnabled && snifferConfig.sniff) {
            delete snifferConfig.sniff.QUIC;
        }
    }

    const result = {
        // 规则配置 (动态生成)
        proxies: proxies,
        "proxy-groups": allGroups,
        "rule-providers": USER_CONFIG.ruleProviders,
        rules: finalRules,
        // 基础配置
        dns: dnsConfig,
        ...USER_CONFIG.baseConfig.geo,
        profile: USER_CONFIG.baseConfig.profile
    };

    // 仅当 sniffer 启用时添加
    if (snifferConfig) {
        result.sniffer = snifferConfig;
    }

    // 完整配置模式
    if (config.fullConfig) {
        Object.assign(result, USER_CONFIG.fullModeConfig);
        result.ipv6 = config.ipv6Enabled;
        result["disable-keep-alive"] = !config.keepAliveEnabled;
    }

    return result;
}
