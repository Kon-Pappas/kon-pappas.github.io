# Greek Energy Market Hub

**Live:** https://kon-pappas.github.io/

The entry page to five public dashboards on the Greek electricity and gas markets, built from public ADMIE/IPTO,
ENTSO-E and HEnEx data. One overview of the whole system, and four deep dives.

## The dashboards

| Dashboard | What it shows | Updated | Repository |
|---|---|---|---|
| [Greek Power Live](https://kon-pappas.github.io/live-greekpower/) | The whole system, hour by hour: where the energy came from and where it went, cross-border flows, BESS and pumping, day-ahead price, clean-generation cross-check, records | Hourly | [live-greekpower](https://github.com/Kon-Pappas/live-greekpower) |
| [BESS](https://kon-pappas.github.io/bess-dashboard-v2/) | Battery storage: scheduled (ISP) against actual (SCADA) per unit, round-trip efficiency, impact on the RES surplus, arbitrage, fleet capacity | Daily | [bess-dashboard-v2](https://github.com/Kon-Pappas/bess-dashboard-v2) |
| [Gas-to-Power](https://kon-pappas.github.io/gas-power-dashboard-v2/) | Gas-fired plants: scheduled against actual generation, efficiency, SRMC and cost (HGSIDA, CO₂), constraint-driven generation | Daily | [gas-power-dashboard-v2](https://github.com/Kon-Pappas/gas-power-dashboard-v2) |
| [Power Flows](https://kon-pappas.github.io/power-flows-dashboard/) | Interconnections with Albania, Bulgaria, Italy, North Macedonia and Turkey: scheduled against actual flows, prices, cash position | Daily | [power-flows-dashboard](https://github.com/Kon-Pappas/power-flows-dashboard) |
| [Hydro & Reservoirs](https://kon-pappas.github.io/bighydro-dashboard/) | Reservoir levels, generation by river and cascade, pumped storage, stored energy calibrated to ENTSO-E, water balance | Daily | [bighydro-dashboard](https://github.com/Kon-Pappas/bighydro-dashboard) |

Every dashboard is in Greek and English. The language chosen on any page carries over to the others; the first
visit opens in English.

## This repository

```
index.html    the hub page: plain HTML + CSS, no build step
              (Greek and English texts at the end of the file)
images/       background images of the dashboard cards
```

Each dashboard lives in its own repository, with its own data pipeline, methodology and documentation.

## Note

An independent, continuously evolving project, built and maintained by a single analyst. Not affiliated with
ADMIE/IPTO, ENTSO-E or HEnEx. The data are public; the analyses and any errors are the author's.

**Konstantinos Pappas** · Energy Market Analyst ·
[LinkedIn](https://www.linkedin.com/in/konstantinosp/) · [GitHub](https://github.com/Kon-Pappas)
