# Telegram CTA tracking

Every bot button sends a separate Telegram deep-link payload in the `start` parameter. The bot should store the `/start` payload together with the user's Telegram ID and first-start timestamp.

| Payload | Location |
| --- | --- |
| `site_header` | Header button |
| `site_hero_trial` | Main hero trial CTA |
| `site_telegram_mockup` | Button inside the Telegram mockup |
| `site_faq_trial` | Trial CTA inside FAQ |
| `site_final` | Final CTA block |
| `site_footer` | Footer brand column |
| `site_support` | Footer support link |
| `site_legal_privacy_aside` | Privacy page side CTA |
| `site_legal_privacy_footer` | Privacy page footer CTA |
| `site_legal_terms_aside` | Terms page side CTA |
| `site_legal_terms_footer` | Terms page footer CTA |
| `site_legal_disclaimer_aside` | Disclaimer page side CTA |
| `site_legal_disclaimer_footer` | Disclaimer page footer CTA |

Example incoming command:

```text
/start site_hero_trial
```

Important: the website only passes the source marker. Attribution appears in reports only after the bot backend saves and aggregates these payloads.
