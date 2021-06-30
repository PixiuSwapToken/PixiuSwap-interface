import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://pixiuswap.finance/'
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap'
      },
      {
        label: 'Liquidity',
        href: '/pool'
      }
    ]
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://pixiuswap.finance/farms'
  },
  {
    label: 'Nests',
    icon: 'PoolIcon',
    href: 'https://pixiuswap.finance/nests'
  },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: 'https://pixiuswap.finance/lottery'
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0xca92ab56378b0bc3615a17eabdd0ea65e0dc9bd8/',
      },
      // {
        // label: 'CoinGecko',
        // href: 'https://www.coingecko.com/en/coins/pixiuswap',
      // },
      // {
        // label: 'CoinMarketCap',
        // href: 'https://coinmarketcap.com/currencies/pixiuswap/',
      // },
      {
        label: 'AstroTools',
        href: 'https://app.astrotools.io/pancake-pair-explorer/0xca92ab56378b0bc3615a17eabdd0ea65e0dc9bd8',
      },
    ]
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: "Github",
        href: "https://github.com/pixiuswap/",
      },
      {
        label: "Docs",
        href: "https://pixiuswap.gitbook.io/pixiuswap-finance/",
      },
      {
        label: "Blog",
        href: "https://pixiuswap.com/",
      },
    ],
  },
  {
    label: 'Partnerships/IFO',
    icon: 'GooseIcon',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSe7ycrw8Dq4C5Vjc9WNlRtTxEhFDB1Ny6jlAByZ2Y6qBo7SKg/viewform?usp=sf_link',
  },
  // {
    // label: 'Audit by Hacken',
    // icon: 'AuditIcon',
    // href: 'https://pixiuswap.finance/files/hackenAudit.pdf',
  // },
  // {
    // label: 'Audit by CertiK',
    // icon: 'AuditIcon',
    // href: 'https://certik.org/projects/pixiuswap-finance',
  // },
]

export default config
