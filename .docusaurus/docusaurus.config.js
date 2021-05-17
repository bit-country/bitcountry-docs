export default {
  "title": "Bit.Country Documentation",
  "tagline": "Learn how to integrate with the Metaverse Network - Bit.Country",
  "url": "https://docs.bit.country",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.ico",
  "organizationName": "bit-country",
  "projectName": "bitcountry-docs",
  "themeConfig": {
    "navbar": {
      "title": "Bit.Country Documentation",
      "logo": {
        "alt": "My Site Logo",
        "src": "img/logo.png"
      },
      "items": [
        {
          "href": "https://github.com/bit-country",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Getting Started",
              "to": "/"
            },
            {
              "label": "Bit.Country Validators",
              "to": "/node-operator/"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Website",
              "href": "https://bit.country"
            },
            {
              "label": "Discord",
              "href": "https://discord.gg/2Axse8QS6X"
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com/BitDotCountry"
            },
            {
              "label": "Telegram",
              "href": "https://t.me/bitcountryofficial"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "Bit.Country Medium",
              "to": "https://bitcountry.medium.com"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/bit-country"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2021 Bit.Country"
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "prism": {
      "additionalLanguages": []
    },
    "hideableSidebar": false
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/Volumes/Samsung_T5/Projects/BitCountry-Docs/bitcountry-docs/sidebars.js",
          "routeBasePath": "/",
          "editUrl": "https://github.com/bit-country/documentation/edit/main/"
        },
        "theme": {
          "customCss": "/Volumes/Samsung_T5/Projects/BitCountry-Docs/bitcountry-docs/src/css/custom.css"
        }
      }
    ]
  ],
  "baseUrlIssueBanner": true,
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};