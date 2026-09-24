# Shopify Hydrogen Skills

Enterprise Digital Platform AI skills for Shopify Hydrogen headless commerce.

## Entry Points
- `shopify-hydrogen-inspect-storefront`
- `shopify-hydrogen-diagnose-runtime`
- `shopify-hydrogen-trace-commerce-flow`

## Hydrogen Architecture
- `shopify-hydrogen-analyze-react-router`
- `shopify-hydrogen-analyze-oxygen`
- `shopify-hydrogen-analyze-environments`
- `shopify-hydrogen-analyze-api-version-upgrade`

## Shopify Commerce APIs
- `shopify-hydrogen-analyze-storefront-api`
- `shopify-hydrogen-analyze-customer-account`
- `shopify-hydrogen-analyze-cart`
- `shopify-hydrogen-analyze-b2b`

## Storefront Experiences
- `shopify-hydrogen-analyze-product-page`
- `shopify-hydrogen-analyze-collections`
- `shopify-hydrogen-analyze-search`
- `shopify-hydrogen-analyze-markets`

## Performance and Discoverability
- `shopify-hydrogen-analyze-caching`
- `shopify-hydrogen-analyze-performance`
- `shopify-hydrogen-analyze-images`
- `shopify-hydrogen-analyze-seo`

## Integration and Operations
- `shopify-hydrogen-analyze-analytics`
- `shopify-hydrogen-analyze-webhooks`
- `shopify-hydrogen-analyze-third-party-data`
- `shopify-hydrogen-analyze-enterprise-middleware`
- `shopify-hydrogen-analyze-security`
- `shopify-hydrogen-analyze-testing`

All public skill names use the `shopify-hydrogen-` prefix so the namespace remains unambiguous in an enterprise environment.

Hydrogen is treated as Shopify's React Router-based headless commerce stack. Skills must inspect the repository's actual Hydrogen/API versions and avoid assuming older Remix APIs or deprecated Hydrogen components.

Customer-specific data must not be placed in public/subrequest caches.
