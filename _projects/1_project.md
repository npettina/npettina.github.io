---
layout: page
title: SVM classification of bacterial species from imaging data
description: Mentored by Dr. Raghuveer Parthasarathy
img: assets/img/ac_rfp_100ms_4.jpg
importance: 1
category: work
related_publications: false
---

To the untrained eye, images of different species of fluorescent bacteria often appear incredibly similar when imaged using conventional microscopy techniques. From fluorescence imaging data, we are able to create a database of metrics for each species, including distributions of major/minor axis lengths, motility speeds, tumble frequencies, and observed size of bacterial cells. 

By applying support vector machines (SVMs) to these measurable properties of these images,  I created new assays for bacterial species that can differentiate between species within the same fluorescent channel with >95% accuracy for most pairs of species. We hope to apply these assays in vivo to better understand zebrafish gut colonization dynamics by effectively doubling the number of species we are able to image.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/pl-1_cropped.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ac_rfp_100ms_4.jpg" title="Acinetobacter bacteria imaged with LSFM" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/AE-AC_GFP_major-area_hist.jpg" title="Major axis length vs. Area for Aeromonas and Acinetobacter bacteria" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: timelapse showing real-time motion of Plesiomonas bacteria under light sheet fluorescence microscopy (LSFM). Middle: still image showing non-motile Acinetobacter bacteria. Right: example of plotted metrics used for training an SVM for bacterial species classification. It becomes clear as the number of variables increases that using multiple parameters to train the model yields higher classification accuracy. 
</div>
