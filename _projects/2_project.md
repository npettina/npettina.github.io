---
layout: page
title: Understanding bacterial range expansion
description: Validating Fisher's diffusion equation for bacterial range expansion
img: assets/img/example_SPimage.jpg
importance: 2
category: work
---

The Fisher speed is a theoretical prediction for the macroscopic range expansion rate for a self-replicating object based solely on its microscopic quantities (i.e. diffusion constant and replication rate). This project focused on measuring these quantities for several species of commensal bacteria native to the zebrafish gut to compare the theoretical prediction to the observed range expansion rate. We found there was a large discrepancy in nutrient-rich media, likely due to the chemotactic behavior of the observed bacteria. These findings were confirmed by the literature upon further review.

Further experiments revealed strange "finger-like" expansion behavior in strains with chemotaxis knockouts. This behavior was later attributed to the emergence of phototaxis in chemotactic knockouts, and confirmed by literature review.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/aewt-3.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/growth-curves_02FEB2020.png" title="Bacterial growth curves for six strains of commensal bacteria showing OD at 600nm over time" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/pomAB_KO_SP.tiff" title="Swim plates showing bacterial range expansion" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: video showing highly motile Aeromonas bacteria in real time. Middle: OD600 growth curves for six strains of bacterial species. From these we can measure the bacterial growth rate. Right: Swim plates showing macroscopic bacterial range expansion. Together with microscopic imaging, these can be used to relate microscopic diffusion to macroscopic range expansion.
</div>
