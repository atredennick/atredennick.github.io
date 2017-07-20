---
layout: page
title: Papers
nav: papers
---

{% for pubyear in (2009..2017) reversed %}
# {{pubyear}}

{% for p in site.data.bib %}
{% if p.issued.date-parts[0][0] == pubyear %}
{% include bibentry.html %}
{% endif %}{% endfor %}

{%endfor%}


{% comment %}

**T. Poisot** (2012) L'ABC de la spécialisation: apparition, biodiversité, conservation. *Le Prisme à Idées* 4, 49-52. Vulgarization paper in French for the special issue *From uncertainty to risk*. [pdf]( {{ site.url }}/reprints/poisot_prisme_abc.pdf).

{% endcomment %}
