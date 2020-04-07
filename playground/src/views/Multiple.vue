<template>
    <div>
        <div>
            <svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" width="52mm" height="74mm" viewBox="0 0 210 297" version="1.1" id="svg8" :style="{transform: `scaleY(${human.height / 150})`}" inkscape:version="0.92.3 (2405546, 2018-03-11)" sodipodi:docname="stickman.svg"> <defs id="defs2" /> <metadata id="metadata5"> </metadata> <g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1"> <ellipse style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:10.36099911;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:82.39488983;stroke-opacity:1" id="path817" cx="92.98214" cy="81.553574" rx="41.577381" ry="40.065475" /> <ellipse style="opacity:0.84500002;fill:#00ffff;fill-opacity:1;stroke:none;stroke-width:10.36099911;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:82.39488983;stroke-opacity:1" id="path819" cx="78.997025" cy="67.946426" rx="9.4494047" ry="6.8035712" /> <ellipse style="opacity:0.84500002;fill:#00ffff;fill-opacity:1;stroke:none;stroke-width:10.36099911;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:82.39488983;stroke-opacity:1" id="path821" cx="109.99107" cy="70.214287" rx="7.9375" ry="6.8035712" /> <rect style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:7.36499977;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:82.39488983;stroke-opacity:1" id="rect831" width="114.1488" height="6.0476193" x="40.065475" y="137.49405" /> <path style="fill:#ffff00;stroke:#000000;stroke-width:0.29136401px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" d="M 53.887554,61.830307 C 8.3613471,58.359671 7.5626411,58.359671 7.5626411,58.359671 L 58.679787,52.286057 29.926392,25.388623 72.257777,47.080101 69.861663,3.6971456 87.433181,40.138829 121.77751,6.3001229 106.60211,43.609465 150.53091,18.447351 115.38787,50.55074 176.88819,39.27117 124.17363,58.359671 165.70631,73.977535 113.79046,59.227329 97.81635,46.212443 85.835769,48.815421 69.062956,51.418399 Z" id="path833" :style="{fill: `rgb(${255 - (human.age/10)}, ${255 - (human.age/10)}, ${human.age * 2})`}" inkscape:connector-curvature="0" /> <path style="fill:none;stroke:#000000;stroke-width:6.465;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;stroke-miterlimit:4;stroke-dasharray:none" d="m 91.470238,122.375 c 0.755952,101.29762 1.511903,103.56547 1.511903,103.56547 l -27.970236,46.11311 27.970236,-46.86906 26.458329,42.33333" id="path835" inkscape:connector-curvature="0" /> </g> </svg>
        </div>
        <HumanStats v-model:age="human.age" v-model:height="human.height"/>
    </div>
</template>

<script>
import { reactive } from 'vue'
import HumanStats from '@/components/HumanStats'

export default {
    setup(){
        const human = reactive({
            name: 'Dudeson',
            age: 20,
            height: 150,
        })

        return {human}
    },
    components: {HumanStats}
}
</script>

<style scoped>
div{
    display: flex;
}
</style>