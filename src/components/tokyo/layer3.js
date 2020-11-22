import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'


const Group = styled.g`
#path1510{
    fill:${props => props.isDark ? "#202e3b" : "#3F5873"};
}
#path1556{
    fill:${props => props.isDark ? "#100f1f" : "#222144"};
}
#red-lights{
    path{
        opacity:${props => props.isDark ? 1 : 0.61};
        animation: ${props => props.isDark ? "flicker .6s ease-in alternate infinite" : null};
    }
    @keyframes flicker {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0.6;
        }
    }
}
#train{
    #path1284{
        fill:${props => props.theme.palette.cultured};
    }
}
`

const Layer3 = ({ isDark }) => {
    return (
        <Group isDark={isDark} id="layer3" display="inline" transform="translate(0 -31.23)">
            <path
                id="path1102"
                fill="#1b3147"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M600.018 447.013h-7.931v3.992h3.996v8.047h3.935z"
                display="inline"
            ></path>
            <path
                id="path1104"
                fill="#fff"
                strokeWidth="1.122"
                d="M596.083 450.945v4.084h-3.992v-4.084z"
                display="inline"
            ></path>
            <path
                id="path1106"
                fill="#1b3147"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M612.006 446.953h-7.93v3.992h3.996v8.047h3.934z"
                display="inline"
            ></path>
            <path
                id="path1108"
                fill="#fff"
                strokeWidth="1.122"
                d="M608.072 450.945v4.084h-3.992v-4.084z"
                display="inline"
            ></path>
            <path
                id="path9386"
                fill="#0a0a1e"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M1250.148 333.207h15.808v39.875h-3.886V337.09h-11.922z"
                display="inline"
            ></path>
            <Train />
            <path
                id="path1354"
                fill="#587582"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M903.374 410.843v11.862h32.294v-11.862z"
                display="inline"
            ></path>
            <path
                id="path1510"
                fill="#1b3147"
                fillOpacity="1"
                strokeWidth="1.096"
                d="M120.36 219.454l-11.958.002v3.991h-3.996v4.024h-3.996v3.961h-3.98v7.704H52.344v88.237H48.36v3.901h-3.993v-4.052H32.44v3.991h-3.996v4.022h-4.029v-3.991H20.39v-3.994H4.465v3.93H.505l-.146 39.932h4.069v8.128l-4.097.01L0 470.952l104.13.004h96.061l77.65-.085H408.045v.002h59.626v-7.943h-11.992v-8.047h-38.421v8.047H279.824v-3.52h.675v-8.161h7.948l-.01 8.171h3.962l.022-8.127h7.948v8.116h4.105v-8.116h7.906l.011 8.116 3.92.011v-8.127h8.166v8.116h3.976v-4.278h3.93l.011 4.278h3.898l.022-8.142h8.243v8.149l3.86-.002.011-8.084h7.867v8.084l4.06-.011v-8.138h8.054l.011 8.149 3.85-.011.01-8.2h8.189l.044 8.217 4.636.011v-12.197h-52.831v4.03h-3.935v-3.866H279.83l-.01-51.761h655.777l.01 3.316-28.023-.011v3.923h4.02l.016 8.314h3.884l.028-8.357h8.038l.028 8.375 3.948-.016v-8.272h8.073l.024 8.277.013 3.63h-28.063l-.01-11.953h-4.205v3.944l-3.65.021v3.882l3.65-.022v8.143c11.059.04 22.702.04 32.289.04l.01 3.833-35.933-.002v4.415l35.945.002.096 43.745 163.501.114v-.059h179.892V367.123h-31.793v-51.729h-60.27v-3.397h3.428v-3.976h-3.48v-4.024h3.822v-3.729h-3.875v-3.925h-3.814v3.816h-3.92v4.035h3.953v3.993h-3.952v4.014h3.855v3.193h-40.07v19.797l-43.87.01.068 44.306-159.85-.3-687.685.061-.077-8.6v-15.096H239.66v-24.953h11.987v-10.856h-11.864v-24.952h11.864v-10.98H239.66V258.88h12.112V247.9H239.66v-3.991h-23.98v-8.11h-23.978v-11.854h-10.99v11.979h-4.996v-12.227h-11.24v11.79H152.27v-12.103h-31.91zM.332 379.25c.067-1.19.015-3.9.015-3.934zM152.336 239.3h4.298v4.14h-4.298zm7.991 0h4.299v4.14h-4.299zm15.986 0h4.3v4.14h-4.3zm15.985 0h4.3v4.14h-4.3zm7.994 0h4.298v4.14h-4.298zm7.994 0h4.298v4.14h-4.298zM35.824 367.566h3.959v3.881h-3.959zm-7.064 3.982h3.989v8.005h-8.011v-4.048h4.022zm-20.236 3.768h3.99v4.14h-3.99zm35.11.226h4.2v4.116h-4.2zm1035.964 19.523l.011 4.05h-8.202l-.011-4.024zm-121.985 4.072h6.142v11.988h-6.142zm-701.478 3.88h8.042v8.003h-8.042zm-7.946.002h4.046v8.003h-4.046zm775.694.675h7.123l.011 7.437-7.163.015zm16.237.19h4.38l-.011 4.347h-4.371zm-144.23 6.826v3.965h-4.018v3.882h4.018v4.147h3.836V410.71zm-4.018 7.847h-3.838v3.963h-4.017v3.882h4.017v4.145h3.838zm0 11.99l-.015 4h32.063v-3.996zm-7.855-4.145h-3.834v3.963h-4.018v3.882h4.018v4.147h3.834zm0 11.992l-.022 4.318h32.062v-4.31zm-7.852-4.147h-3.836v3.963h-4.02v3.882h4.02v4.147h3.836zm0 11.992v4.013h32.063v-4.013zm-7.856-4.147l-3.846.002-.013 5.021h-48.564v11.948h3.871v-8.046h8.117v8.046h3.934v-8.108h8.055v8.108h3.871v-8.108h8.18v8.108h3.873v-8.046h8.055l.002 8.044h42.396v-5.02l-37.96.086zm-108.493 4.962v11.948h3.87v-8.047h8.117v8.047h3.935v-8.11h8.055v8.11h3.87v-8.11h8.18v8.11h3.874v-8.047h8.055v8.141h3.976v-12.042zm-338.907 11.595h7.648v4.28h-7.648zm11.8 0h7.649v4.28h-7.65zm11.802 0h7.648v4.28h-7.648z"
                display="inline"
            ></path>
            <path
                id="path1360"
                fill="#eaecf1"
                strokeWidth="1.122"
                d="M156.635 239.3h-4.3v4.14h4.3z"
                display="inline"
            ></path>
            <path
                id="path1366"
                fill="#0a0a1e"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M244.275 258.665h3.93v25.337h-3.93z"
                display="inline"
            ></path>
            <path
                id="path1368"
                fill="#0a0a1e"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M244.275 294.283h3.93v25.556h-3.93z"
                display="inline"
            ></path>
            <path
                id="path1370"
                fill="#0a0a1e"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M244.275 330.521h3.93v25.157h-3.93z"
                display="inline"
            ></path>
            <path
                id="path1372"
                fill="#0a0a1e"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M132.3 267.296h3.282v12.144H132.3z"
                display="inline"
            ></path>
            <path
                id="path1374"
                fill="#587582"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M124.382 267.296h7.918v12.144h-7.918z"
                display="inline"
            ></path>
            <path
                id="path1376"
                fill="#587582"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M140.367 267.296h7.918v12.144h-7.918z"
                display="inline"
            ></path>
            <path
                id="path1378"
                fill="#587582"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M164.345 267.296h7.918v12.144h-7.918z"
                display="inline"
            ></path>
            <path
                id="path1380"
                fill="#587582"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M180.331 267.296h7.919v12.144h-7.919z"
                display="inline"
            ></path>
            <path
                id="path1382"
                fill="#587582"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M220.295 267.296h7.919v12.144h-7.919z"
                display="inline"
            ></path>
            <path
                id="path1384"
                fill="#587582"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M204.309 267.296h7.918v12.144h-7.918z"
                display="inline"
            ></path>
            <path
                id="path1386"
                fill="#587582"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M204.309 303.228h7.918v12.144h-7.918z"
                display="inline"
            ></path>
            <path
                id="path1388"
                fill="#587582"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M164.345 303.228h7.918v12.144h-7.918z"
                display="inline"
            ></path>
            <path
                id="path1390"
                fill="#587582"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M220.295 303.228h7.919v12.144h-7.919z"
                display="inline"
            ></path>
            <path
                id="path1392"
                fill="#587582"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M180.331 303.228h7.919v12.144h-7.919z"
                display="inline"
            ></path>
            <path
                id="path1394"
                fill="#587582"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M140.367 303.228h7.918v12.144h-7.918z"
                display="inline"
            ></path>
            <path
                id="path1396"
                fill="#587582"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M124.382 303.228h7.918v12.144h-7.918z"
                display="inline"
            ></path>
            <path
                id="path1400"
                fill="#587582"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M204.309 339.16h7.918v12.144h-7.918z"
                display="inline"
            ></path>
            <path
                id="path1402"
                fill="#587582"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M164.345 339.16h7.918v12.144h-7.918z"
                display="inline"
            ></path>
            <path
                id="path1404"
                fill="#587582"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M220.295 339.16h7.919v12.144h-7.919z"
                display="inline"
            ></path>
            <path
                id="path1406"
                fill="#587582"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M180.331 339.16h7.919v12.144h-7.919z"
                display="inline"
            ></path>
            <path
                id="path1408"
                fill="#587582"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M140.367 339.16h7.918v12.144h-7.918z"
                display="inline"
            ></path>
            <path
                id="path1410"
                fill="#587582"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M124.382 339.16h7.918v12.144h-7.918z"
                display="inline"
            ></path>
            <path
                id="path1412"
                fill="#587582"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M92.406 275.396v-4.152h-3.98v-7.866h-4.07v12.018z"
                display="inline"
            ></path>
            <path
                id="path1414"
                fill="#587582"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M92.406 311.328v-4.152h-3.98v-7.866h-4.07v12.018z"
                display="inline"
            ></path>
            <path
                id="path1416"
                fill="#587582"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M92.406 347.26v-4.152h-3.98v-7.867h-4.07v12.019z"
                display="inline"
            ></path>
            <path
                id="path1418"
                fill="#587582"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M96.387 267.355h20.078v12.062H96.387z"
                display="inline"
            ></path>
            <path
                id="path1420"
                fill="#f1a5a0"
                strokeWidth="1.122"
                d="M99.921 270.838h5.009v5.004H99.92z"
                display="inline"
            ></path>
            <path
                id="path1422"
                fill="#718697"
                strokeWidth="1.122"
                d="M107.914 270.838h5.008v5.004h-5.008z"
                display="inline"
            ></path>
            <path
                id="path1424"
                fill="#0a0a1e"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M96.255 267.355h-3.893v11.974h4.025v-11.974z"
                display="inline"
            ></path>
            <path
                id="path1426"
                fill="#587582"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M96.387 303.287h20.078v12.062H96.387z"
                display="inline"
            ></path>
            <path
                id="path1428"
                fill="#f1a5a0"
                strokeWidth="1.122"
                d="M99.921 306.77h5.009v5.004H99.92z"
                display="inline"
            ></path>
            <path
                id="path1430"
                fill="#718697"
                strokeWidth="1.122"
                d="M107.914 306.77h5.008v5.004h-5.008z"
                display="inline"
            ></path>
            <path
                id="path1432"
                fill="#0a0a1e"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M96.255 303.287h-3.893v11.974h4.025v-11.974z"
                display="inline"
            ></path>
            <path
                id="path1434"
                fill="#587582"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M96.387 339.219h20.078v12.06H96.387z"
                display="inline"
            ></path>
            <path
                id="path1436"
                fill="#f1a5a0"
                strokeWidth="1.122"
                d="M99.921 342.702h5.009v5.004H99.92z"
                display="inline"
            ></path>
            <path
                id="path1438"
                fill="#718697"
                strokeWidth="1.122"
                d="M107.914 342.702h5.008v5.004h-5.008z"
                display="inline"
            ></path>
            <path
                id="path1440"
                fill="#0a0a1e"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M96.255 339.219h-3.893v11.974h4.025V339.22z"
                display="inline"
            ></path>
            <path
                id="path1442"
                fill="#587582"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M120.36 219.46v3.925h35.881v-3.924z"
                display="inline"
            ></path>
            <path
                id="path1444"
                fill="#587582"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M120.266 227.39v16.05h16.146v-11.988h7.981v11.989h7.943v-16.05zm4.022 3.954h8.042v8.003h-8.042z"
                display="inline"
            ></path>
            <path
                id="path1446"
                fill="#587582"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M112.335 387.057v8.046h19.983v-8.046z"
                display="inline"
            ></path>
            <path
                id="path1448"
                fill="#0a0a1e"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M132.318 387.057h4v8.046h-4z"
                display="inline"
            ></path>
            <path
                id="path1450"
                fill="#587582"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M140.31 387.057v8.046h19.982v-8.046z"
                display="inline"
            ></path>
            <path
                id="path1452"
                fill="#0a0a1e"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M160.292 387.057h4.001v8.046h-4z"
                display="inline"
            ></path>
            <path
                id="path1454"
                fill="#587582"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M216.242 387.057v8.046h19.982v-8.046z"
                display="inline"
            ></path>
            <path
                id="path1456"
                fill="#0a0a1e"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M236.224 387.057h4v8.046h-4z"
                display="inline"
            ></path>
            <path
                id="path1458"
                fill="#587582"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M184.164 383.593l-.07 27.975 12.604.002v-28.072z"
                display="inline"
            ></path>
            <path
                id="path1460"
                fill="#718697"
                strokeWidth="1.122"
                d="M192.273 395.067v4.021h4.112v-4.02z"
                display="inline"
            ></path>
            <path
                id="path1462"
                fill="#587582"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M52.343 239.118h57.09v4.367H56.651v3.68h-4.309z"
                display="inline"
            ></path>
            <g
                id="red-lights"
                fillOpacity="1"
                transform="matrix(1.12224 0 0 1.12224 0 -57.574)"
            >
                <path
                    id="path1356"
                    fill="#e95555"
                    d="M1111.4 325.333v7.009h-10.43v-7.009z"
                    display="inline"
                ></path>
                <path
                    id="path1364"
                    fill="#ff3f3f"
                    d="M46.641 264.374h10.824v-3.114H46.64z"
                    display="inline"
                ></path>
                <path
                    id="path1398"
                    fill="#ff3f3f"
                    d="M199.028 261.357h10.694v7.269h-10.694z"
                    display="inline"
                ></path>
                <path
                    id="path1464"
                    fill="#ff3f3f"
                    d="M82.306 261.178H93v7.104H82.306z"
                    display="inline"
                ></path>
            </g>
            <path
                id="path1466"
                fill="#0a0a1e"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M148.285 267.296h3.282v12.144h-3.282z"
                display="inline"
            ></path>
            <path
                id="path1468"
                fill="#0a0a1e"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M172.263 267.296h3.282v12.144h-3.282z"
                display="inline"
            ></path>
            <path
                id="path1470"
                fill="#0a0a1e"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M188.25 267.296h3.281v12.144h-3.281z"
                display="inline"
            ></path>
            <path
                id="path1472"
                fill="#0a0a1e"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M212.227 267.296h3.282v12.144h-3.282z"
                display="inline"
            ></path>
            <path
                id="path1474"
                fill="#0a0a1e"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M228.214 267.296h3.28v12.144h-3.28z"
                display="inline"
            ></path>
            <path
                id="path1476"
                fill="#0a0a1e"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M228.214 303.228h3.28v12.144h-3.28z"
                display="inline"
            ></path>
            <path
                id="path1478"
                fill="#0a0a1e"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M212.227 303.228h3.282v12.144h-3.282z"
                display="inline"
            ></path>
            <path
                id="path1480"
                fill="#0a0a1e"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M188.25 303.228h3.281v12.144h-3.281z"
                display="inline"
            ></path>
            <path
                id="path1482"
                fill="#0a0a1e"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M172.263 303.228h3.282v12.144h-3.282z"
                display="inline"
            ></path>
            <path
                id="path1484"
                fill="#0a0a1e"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M148.285 303.228h3.282v12.144h-3.282z"
                display="inline"
            ></path>
            <path
                id="path1486"
                fill="#0a0a1e"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M132.3 303.228h3.282v12.144H132.3z"
                display="inline"
            ></path>
            <path
                id="path1488"
                fill="#0a0a1e"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M132.3 339.16h3.282v12.144H132.3z"
                display="inline"
            ></path>
            <path
                id="path1490"
                fill="#0a0a1e"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M148.285 339.16h3.282v12.144h-3.282z"
                display="inline"
            ></path>
            <path
                id="path1492"
                fill="#0a0a1e"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M172.263 339.16h3.282v12.144h-3.282z"
                display="inline"
            ></path>
            <path
                id="path1494"
                fill="#0a0a1e"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M188.25 339.16h3.281v12.144h-3.281z"
                display="inline"
            ></path>
            <path
                id="path1496"
                fill="#0a0a1e"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M212.227 339.16h3.282v12.144h-3.282z"
                display="inline"
            ></path>
            <path
                id="path1498"
                fill="#0a0a1e"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M228.214 339.16h3.28v12.144h-3.28z"
                display="inline"
            ></path>
            <path
                id="path1502"
                fill="#0f0f2d"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M491.761 459.033v8.203h-24.09v3.618h52.347v-3.618h-4.062v-8.203zm0 3.882h4.282l.011 4.335-4.291-.013zm8.257 0h4.017v4.058h-4.017zm7.992 0h4.018v4.058h-4.018z"
                display="inline"
            ></path>
            <path
                id="path1504"
                fill="#587582"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M247.276 371.188l-.003 8 699.75.445v3.867h32.845v-3.992h119.39l-.011-8.4-842.157-.009z"
                display="inline"
            ></path>
            <path
                id="path1506"
                fill="#718697"
                strokeWidth="1.122"
                d="M1195.369 303.008h23.32v12.373h-23.32z"
                display="inline"
            ></path>
            <path
                id="path1508"
                fill="#2f455b"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M1195.37 303.008v12.373h16.025v-12.373zm3.95 3.993h8.08v4.057h-8.08z"
                display="inline"
            ></path>
            <path
                id="path1512"
                fill="#587582"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M1247.351 315.378v-4.176h-31.782v4.18h27.652v3.868h4.13z"
                display="inline"
            ></path>
            <path
                id="path1514"
                fill="#587582"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M1115.482 383.076v11.888h3.895v3.808h-3.895v12.358h11.946v-28.054z"
                display="inline"
            ></path>
            <path
                id="path1518"
                fill="#718697"
                strokeWidth="1.122"
                d="M935.558 367.135h32.062v4.014h-32.062z"
                display="inline"
            ></path>
            <path
                id="path1520"
                fill="#587582"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M1187.457 330.79h-24.016v12.063h24.016z"
                display="inline"
            ></path>
            <path
                id="path1522"
                fill="#f1a5a0"
                strokeWidth="1.122"
                d="M1181.947 334.274h-5.005v5.004h5.005z"
                display="inline"
            ></path>
            <path
                id="path1524"
                fill="#718697"
                strokeWidth="1.122"
                d="M1173.956 334.274h-5.005v5.004h5.005z"
                display="inline"
            ></path>
            <path
                id="path1526"
                fill="#587582"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M1187.457 346.761h-24.016v12.061h24.016z"
                display="inline"
            ></path>
            <path
                id="path1528"
                fill="#f1a5a0"
                strokeWidth="1.122"
                d="M1181.947 350.245h-5.005v5.003h5.005z"
                display="inline"
            ></path>
            <path
                id="path1530"
                fill="#718697"
                strokeWidth="1.122"
                d="M1173.956 350.245h-5.005v5.003h5.005z"
                display="inline"
            ></path>
            <path
                id="path1532"
                fill="#587582"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M1111.493 342.697h27.977v11.914h-27.977z"
                display="inline"
            ></path>
            <path
                id="path1534"
                fill="#0a0a1e"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M1111.493 342.697h-4.027v11.914h4.027z"
                display="inline"
            ></path>
            <path
                id="path1536"
                fill="#587582"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M1163.003 378.629h24.42v15.907h-24.42z"
                display="inline"
            ></path>
            <path
                id="path1538"
                fill="#0a0a1e"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M1163.003 378.629h-3.524v15.907h3.524z"
                display="inline"
            ></path>
            <path
                id="path1540"
                fill="#cad4de"
                strokeWidth="1.122"
                d="M1211.215 406.671v7.952h4.22v-4.054h8.046v-3.898z"
                display="inline"
            ></path>
            <path
                id="path1542"
                fill="#cad4de"
                strokeWidth="1.122"
                d="M1228.8 379.073v15.908h4.063v-15.908z"
                display="inline"
            ></path>
            <path
                id="path1544"
                fill="#0a0a1e"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M1187.58 330.79h3.895v11.975h-4.018v-11.974z"
                display="inline"
            ></path>
            <path
                id="path1546"
                fill="#0a0a1e"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M1187.58 346.761h3.895v11.974h-4.018V346.76z"
                display="inline"
            ></path>
            <path
                id="path1550"
                fill="#718697"
                strokeWidth="1.122"
                d="M943.026 375.64h32.062v3.993h-32.062z"
                display="inline"
            ></path>
            <path
                id="path1556"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M48.357 243.23v84.127h3.985V243.23zm51.99.274v23.853h3.945v-3.972h135.39v-4.024H104.355v-15.857zm-43.68.077v3.584h3.85v4.195H56.58v11.8h3.851v-3.933h4.024v3.932h23.883v-19.578zm-.176 23.773v31.728h3.94v-3.934h4.023v3.934H88.34v-23.688h-4.287v-8.04zm3.948 3.935h7.92v12.143h-7.92zm11.99 0h7.919v12.143h-7.92zm27.918 8.147v23.852h3.945v-3.972h135.414v-4.024h-135.35v-15.856zm-43.856 23.85v31.727h3.94v-3.932h4.023v3.932H88.34v-23.687h-4.287v-8.04zm3.948 3.934h7.92v12.143h-7.92zm11.99 0h7.919v12.143h-7.92zm27.918 8.148v23.854h3.96v-3.974H240.19v-4.024h-135.82v-15.856zm1147.026.009v99.7h-4.061v-4.064h-27.944v44.008h-4.187v-43.89h.033v-4.015h32.008v-4.213h-3.737v-3.96h3.737V315.38h-39.84v95.529h-.046v.221h-67.985v-36.05h8.046v-7.923h-15.913v7.923h3.996v36.05h-15.996v-28.054h-3.976v28.054h-4.062v-36.039h-3.928v36.04h-4.29l.032-31.623H979.867v3.991h-32.845v-3.866h-3.996v-3.994h-3.995v-4.491h-3.472V382.75h4.471v3.866h4.12l.06 12.54 7.35-.011v11.978h6.053v-11.99l6.142-.006v11.877h7.93v7.985h-8.057v8.11h-7.961v-8.037h-4.062l-.046-7.94h-7.926v3.885l-7.974-.03v3.853h.035v3.86h-28.106v-3.819h-.011v-4.009l-7.858-.028v7.869h-3.836v-4.147h-4.018v-3.88h2.909l-3.713-.026v-8.195h4.12V395.6h-75.056v10.938h3.794v52.495l-88.157-.048v11.972h427.612v-15.97h4.119v15.97h15.89v-3.965h3.907v-3.926h4.04v-4.212l11.995.007h12.076V463h3.974v-4.123h4.004v-3.97h4.064v-3.993h19.808v3.983h7.967v-7.924h3.871v-3.869h4.187v-3.991l15.89-.016v-15.939h-7.833v7.906h-20.1v-8.073h12.121v-7.939l15.813-.004v-3.989h-27.844v-20.003h4.108v4.127h11.819v-3.917h8.1v-4.18l3.817-.009v-8.055h-27.844V331.19l.011-15.815zm-7.9 3.87h3.736v3.961h-3.735zm-30.94 15.032h34.676v4.998h-4.32v4.443h-5.004v-4.443h-16.352V355.247h-8.068v-4.998h3.062v-10.972h-3.994zm-1124.12 5.125l-27.748.088v4.059h-8.126v3.176h8.126v4.057l3.796.066-.022-7.696h7.917v12.143l-3.934-.03.015 7.338h4.414v8.825h-4.239v4.055H47.833v-4.055H35.824v-3.882h3.959v-.002H28.76v3.985h3.989v8.004h-8.011v-4.05h-4.81v-3.88l-3.443-.02v3.711h-3.972v4.143H8.524v-4.143H4.428v3.924l-4.097.011-.086 23.863 8.28.011v8.005l-8.308.004-.116 31.649v.252l20.38-.002v3.88h7.95v4.078h3.991v3.957h3.992v4.017h4.081v4.018h3.959v-3.956h11.91v3.956h4.145v-4.018h7.917v-3.956H88.41v4.14H96.39v3.786h4.022v4.033h4.112v3.926l23.673.021V466.904h4.059v-3.993h7.93v-3.991h12.24V462.91h11.99V458.98h11.925V466.966h7.87v-4.055h12.111V466.841h4.06v4.055l3.81-.062v-7.923h132.005v7.943h71.848v-11.82h-44.372v-52.702h3.746V395.6h-74.682v10.981h3.746l-.044 52.81h-19.995v-8.023h-8.081v-3.985h11.46l-.003-12.318-7.691-.037v-8.11l7.691.054v-3.89l-11.623-.033v-8.11l11.62-.015v-3.532l-12.096.088v-11.823l-51.042-.064v11.852h-8.867v-27.822h-3.12v27.822h-4.996v-27.947h-2.999v28.072l-16.862-.092-.122-28.852h4.122v-6.988h-10.99v6.863h3.871v29.069h-28.85v-12.1H104.63l.09-28.29h149.954v-4.025H104.787V351.3h-4.438l-.123 48.171h-3.312v3.994h-5.12v-3.994H87.92l.05-52.235-3.612.022zm-75.93 3.706v4.128H.51v4.173h7.972v-4.127h12.03v-4.174zm19.98 0v4.174h12.032v-4.174zm12.032 4.174v3.803h3.79v-3.803zm-12.031 0h-3.788v3.803h3.788zm43.965-4.132h7.919v12.145h-7.92zm1150.816 4.018h8.058v12.086h-8.058zM43.634 375.522h4.2v4.116h-4.2zm1171.755 3.55h17.474v15.907h-17.474zm-968.116.114v3.799h20.704v12.132h3.799v-12.132h4.197v12.132h3.843v-12.132h152.02v12.042h3.798v-12.042h4.285v12.042h3.801v-12.042h152.106v11.908h3.976v-11.862h4.11v11.862h3.798v-11.908h152.018v12.042h3.93v-11.996h4.066v11.952h3.974v-11.91h151.974v11.91h3.845v-11.91h4.153v11.91h3.886v-15.797zm735.716 3.564l96.611.024v12.27l3.799-.001v-4.055h12.178l-.022 20.143h-71.67v-7.455h7.119v4.538h9.116v-4.347h7.933v-4.092h3.406v-4.669h-55.946l.024 4.038-31.78-.012v-4.506l27.223-.022v-3.119H955.14v-4.866h27.848zm-982.402.28h7.92v16.127H.587zm19.817 0h12.141v12.01h3.928v4.08H16.38v-12.113h4.024zm19.97.023h8.268v8.217h-4.114v-4.173h-4.154zm16.117 7.974h15.924v3.978h4.069v4.193H52.425v-4.061h4.066zm994.97.077v4.002h12.077v-4.002zm12.077 4.002v3.93h3.998v3.99h3.871l-.011-7.95zm-595.085.498v10.937h3.792v64.295h19.81v-55.77h-4.12v-8.047h7.991v-3.994h20.109v3.994h3.94v63.749h19.414v-64.31h4.12v-10.854zm175.84 0v10.937h3.794v64.295h19.81v-55.77h-4.12v-8.047h7.993v-3.994h20.106v3.994h3.941v63.749h19.411v-64.31h4.123v-10.854zm-324.647 7.055h20.84v4.235h4.065v52.404h-28.966v-43.934h-4.062v-8.645h8.123zm-215.297.344h4.09v8.084h-4.09zm151.786.007h8.042v8.003h-8.042zm-11.973.01h8.075v8.002h-4.048v-3.991h-4.024zm603.44.008h20.107v3.994h3.94v31.193h.674v-3.963h3.836v11.99h32.062v4.013H876.16v-4.014h-3.836v-4.147h-.673v12.027l34.586-.079v5.02H871.65l-27.92-.018v-43.978h-4.121v-8.046h7.994zm-835.13.082h8.042v8.002h-8.042zm11.99 0h8.04v8.002h-8.04zm19.98 0h8.043v8.002h-8.042zm11.99 0h8.042v8.002h-8.042zm11.99 0h8.04v8.002h-8.04zm11.987 0h8.042v8.002H80.41zm31.973 0h8.04v8.002h-8.04zm11.988 0h8.042v8.002h-8.042zm11.99 0h8.041v8.002h-8.042zm83.924 0h8.04v8.002h-8.04zm11.99 0h8.042v8.002h-8.042zm-195.86 3.936h4.112v4.022h-4.112zm55.95 0h4.112v4.022h-4.112zm923.588.097h3.961v4.006h-3.96v-.017h-4.187v-3.492h4.186zm-62.374 3.989l6.05.011v-.011zm-905.18 3.759h40.07v8.217H60.343v-4.022H48.4zm1126.915.055h20.113v8.11h-19.92v4.055h-16.185V419h15.992v-.062zm-47.862.026h20.133v4.147h-20.133zm-1007.06.033h24.034v4.05h-24.034zm103.845 0h16.108v8.11h-8.053v3.993h-16.11v-8.171h8.055zm-191.783.063h12.031v7.972H32.453zm163.808 0h16.046v4.117h-16.046zm691.769 3.492h3.836v11.99h32.047v4h-32.047v-4h-3.836v-4.147h-4.02v-3.88h4.02zm335.237.44h16.05v4.117h-16.05zm-211.775.058h16.11v39.927h-3.996v-3.963h-8.088v3.994h-4.026zm-767.305.002h16.11v39.925H256.3v-3.961h-8.088v3.991h-4.026zm695.431.096h7.869v7.825h-7.869zm-39.88 3.549h35.895v4.418H899.74zm139.76.287h8.055v3.991h3.998v8.047h-3.998v3.995h-8.055v-3.995h-3.996v-8.047h3.996zm0 3.991v8.047h8.055v-8.047zm83.98-3.985h8.035v4.101h-8.036zm-1011.129.011h15.962v4.018h-15.962zm855.152.042h8.116v4.055h-8.116zm48.017.029v3.963h8.086v-3.963zm-767.305.004v3.963h8.088v-3.963zm631.963 3.32h3.834v11.992h-3.834v-4.147h-4.017v-3.882h4.017zm299.38.651h7.9v7.983h-7.9zm-951.324 3.952h7.991v4.025h-7.991zm787.286.057v3.963h8.086v-3.963zm-767.305.004v3.963h8.088v-3.963zm635.804 7.336h32.04v4.31h-32.04zm131.501.645v3.96h8.086v-3.96zm-767.305.004v3.96h8.088v-3.96zm-59.946 7.893h51.954v3.991h-7.93v8.047h-4.123v-7.985h-7.93v8.048h-3.996V451h-7.991v8.048h-4.06V451h-3.873v8.048h-4.12V451h-3.871v7.923h-4.06zm827.251.087v3.961h8.086v-3.96zm-767.305.004v3.961h8.088v-3.96zm727.433 3.836h32.012v12.04h23.844V450.96h80.14V463h3.93v7.895H971.583v-7.937h4.062zm-867.231.043h4.237v16.012h-4.237zm871.117 3.97v8.072h4.106v-8.073zm7.992 0v8.072h4.107v-8.073zm107.904 0v8.072h4.105v-8.073zm7.994 0v8.072h4.105v-8.073zm-107.907.04V463h8.17v-8.073zm39.965 0V463h8.17v-8.073zm11.99 0V463h8.169v-8.073zm11.99 0V463h8.166v-8.073zm11.986 0V463h8.17v-8.073zm11.992 0V463h8.167v-8.073zm35.987 3.931h8.182v4.119h8.06v3.993h3.68v-4.118h8.18v4.055h3.995v3.93h-32.097zm-1003.108.044h4.195v8.073h-4.195zm839.164.142h8.116v3.93h4.029v7.891H935.78v-3.805h11.77v-3.991h7.93zm215.839 3.935h4.118v7.921h-4.118zm-15.927 3.991h4.064v3.803h-4.064z"
                display="inline"
            ></path>
            <path
                id="path1558"
                fill="#587582"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M244.184 407.028v12.04h4.012v-3.962h8.086v3.961h4.012v-12.039h-4.16v3.993h-7.945v-3.993z"
                display="inline"
            ></path>
            <path
                id="path1566"
                fill="#0a0a1e"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M424.164 333.207h15.808v39.875h-3.886V337.09h-11.922z"
                display="inline"
            ></path>
            <path
                id="path1570"
                fill="#0a0a1e"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M588.017 333.207h15.807v39.875h-3.885V337.09h-11.922z"
                display="inline"
            ></path>
            <path
                id="path1574"
                fill="#0a0a1e"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M751.87 333.207h15.806v39.875h-3.885V337.09h-11.922z"
                display="inline"
            ></path>
            <path
                id="path1580"
                fill="#0a0a1e"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M811.88 361.25H923.54v11.77h-3.933v-7.984h-7.993v8.046h-3.872v-7.921h-8.18v7.86h-3.871v-7.985h-8.18v7.985h-3.748v-7.985h-8.304v7.922h-3.373v-7.985h-8.553v7.86h-3.623v-7.86h-8.367v7.86h-3.622v-7.923h-8.367v8.048h-3.685v-7.985h-8.242v7.923h-3.684v-7.86h-8.43v7.86h-3.635z"
                display="inline"
            ></path>
            <path
                id="path1582"
                fill="#1b3147"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M311.524 415.364h33.114v-8.558h-33.114z"
                display="inline"
            ></path>
            <path
                id="path1584"
                fill="#1b3147"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M486.86 415.577h33.115v-8.56H486.86z"
                display="inline"
            ></path>
            <path
                id="path1586"
                fill="#1b3147"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M662.702 415.577h33.115v-8.56h-33.115z"
                display="inline"
            ></path>
            <path
                id="path1588"
                fill="#1b3147"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M639.89 454.96v8.047h-4.027v-7.986h-39.901v8.047h-11.918V470.96h151.729v-7.985h-11.989v-7.985h-39.901v7.985h-4.06v-8.016zm-40.057 4.022h8.056v3.993h-8.056zm11.99 0h8.055v3.993h-8.056zm11.988 0h8.056v3.993h-8.056zm19.983 0h8.055v3.993h-8.055zm11.989 0h8.055v3.993h-8.055zm11.989 0h8.055v3.993h-8.055zm19.982 0h8.056v3.993h-8.056zm11.99 0h8.055v3.993h-8.056zm11.988 0h8.056v3.993h-8.056z"
                display="inline"
            ></path>
            <path
                id="path1590"
                fill="#1b3147"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M839.291 415.577h32.366v-8.558H839.29z"
                display="inline"
            ></path>
            <path
                id="path1600"
                fill="#587582"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M1027.602 419.056v-11.892h-3.719v3.983h-7.945l.01-4.006-4.451.04-.011 11.874z"
                display="inline"
            ></path>
            <path
                id="path1604"
                fill="#0a0a1e"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M975.731 361.25h111.663v11.77h-3.934v-7.984h-7.993v8.046h-3.872v-7.921h-8.18v7.86h-3.871v-7.985h-8.18v7.985h-3.747v-7.985h-8.305v7.922h-3.371v-7.985h-8.555v7.86h-3.623v-7.86h-8.367v7.86h-3.622v-7.923h-8.367v8.048h-3.685v-7.985h-8.241v7.923h-3.685v-7.86h-8.43v7.86h-3.635z"
                display="inline"
            ></path>
            <path
                id="path1606"
                fill="#0a0a1e"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M1103.2 323.187v12.006h3.9v-7.953h3.99v7.953h4.004v-7.953h3.988v7.953h4.003v-7.953h3.995v7.953h3.995v-7.953h3.996v7.953h4.006v-7.953h3.984v7.953h.011v-12.006zm0 12.006h-.22v.038h.22z"
                display="inline"
            ></path>
            <path
                id="path1610"
                fill="#0a0a1e"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M1079.573 333.207h15.808v39.875h-3.886V337.09h-11.922z"
                display="inline"
            ></path>
            <path
                id="path1612"
                fill="#cad4de"
                strokeWidth="1.122"
                d="M1227.24 347.17h4.063v12.085h-4.063z"
                display="inline"
            ></path>
            <path
                id="path1614"
                fill="#587582"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M1191.475 334.279h17.99v4.998h-17.99z"
                display="inline"
            ></path>
            <path
                id="path1616"
                fill="#587582"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M1191.475 350.25h17.99v4.998h-17.99z"
                display="inline"
            ></path>

            <g
                id="post-lights"
                fill="#fff"
                transform="matrix(1.12224 0 0 1.12224 0 -57.574)"
            >
                <path
                    id="path9384"
                    d="M1114.032 357.24l10.563.015v-7.311h-10.623z"
                    display="inline"
                ></path>
                <path
                    id="path1564"
                    d="M378.022 358.97l10.563.013v-7.31h-10.624z"
                    display="inline"
                ></path>
                <path
                    id="path1568"
                    d="M524.026 358.97l10.563.013v-7.31h-10.623z"
                    display="inline"
                ></path>
                <path
                    id="path1572"
                    d="M670.03 358.97l10.563.013v-7.31H669.97z"
                    display="inline"
                ></path>
                <path
                    id="path1576"
                    d="M816.032 357.24l10.563.015v-7.311h-10.623z"
                    display="inline"
                ></path>
                <path
                    id="path1608"
                    d="M962.039 358.97l10.563.013-.001-7.31h-10.623z"
                    display="inline"
                ></path>
            </g>
            <path
                id="path1578"
                fill="#0a0a1e"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M915.72 333.207h15.807v39.875h-3.885V337.09h-11.923z"
                display="inline"
            ></path>

        </Group>
    )
}

export default Layer3


const Train = () => {
    return (
        <motion.g
            style={{ y: -13 }}
            x={1200}
            animate={{ x: [null, 290, -800] }}
            transition={{ duration: 9, times: [0, 0.5, 1], repeat: Infinity }}
            id="train"
        // transform="matrix(1.12224 0 0 1.12224 0 -57.574)"
        >
            <path
                id="path868"
                fill="#f1a5a0"
                d="M597.62 373.926h3.541v-3.641h-3.541z"
                display="inline"
            ></path>
            <path
                id="path878"
                fill="#f1a5a0"
                d="M551.326 373.926h3.541v-3.641h-3.541z"
                display="inline"
            ></path>
            <path
                id="path880"
                fill="#f1a5a0"
                d="M579.814 373.926h3.541v-3.641h-3.541z"
                display="inline"
            ></path>
            <path
                id="path850"
                fill="#fff"
                d="M633.215 373.857h7.24v3.616h-7.24z"
                display="inline"
            ></path>
            <path
                id="path852"
                fill="#fff"
                d="M622.532 373.857h7.239v3.616h-7.239z"
                display="inline"
            ></path>
            <path
                id="path854"
                fill="#fff"
                d="M611.849 373.857h7.239v3.616h-7.239z"
                display="inline"
            ></path>
            <path
                id="path856"
                fill="#fff"
                d="M611.849 366.742h7.239v3.616h-7.239z"
                display="inline"
            ></path>
            <path
                id="path858"
                fill="#fff"
                d="M611.849 359.627h7.239v3.616h-7.239z"
                display="inline"
            ></path>
            <path
                id="path860"
                fill="#fff"
                d="M622.532 359.627h7.239v3.616h-7.239z"
                display="inline"
            ></path>
            <path
                id="path862"
                fill="#fff"
                d="M622.532 366.742h7.239v3.616h-7.239z"
                display="inline"
            ></path>
            <path
                id="path864"
                fill="#fff"
                d="M633.215 366.742h7.24v3.616h-7.24z"
                display="inline"
            ></path>
            <path
                id="path866"
                fill="#fff"
                d="M633.215 359.627h7.24v3.616h-7.24z"
                display="inline"
            ></path>
            <path
                id="path1282"
                fill="#1b3147"
                fillOpacity="1"
                d="M446.909 353.739v-3.609h320.394v3.661h3.509v31.244H443.296v-31.296z"
                display="inline"
            ></path>
            <path
                id="path1284"
                fill="#fe9e41"
                fillOpacity="1"
                d="M446.909 350.13h24.876v3.609h-24.876z"
                display="inline"
            ></path>
            <path
                id="path1286"
                fill="#0a0a1e"
                fillOpacity="1"
                d="M443.296 357.519h3.502v10.45h25.039v-10.617h3.505v24.847h-32.046z"
                display="inline"
            ></path>
            <path
                id="path1288"
                fill="#587582"
                fillOpacity="1"
                d="M443.296 374.973h49.963v3.724h-49.963z"
                display="inline"
                opacity="0.814"
            ></path>
            <path
                id="path1290"
                fill="#fff"
                d="M446.913 371.8h3.384v6.918h-3.384z"
                display="inline"
            ></path>
            <path
                id="path1292"
                fill="#fff"
                d="M468.28 371.8h3.383v6.918h-3.383z"
                display="inline"
            ></path>
            <path
                id="path1294"
                fill="#587582"
                fillOpacity="1"
                d="M475.342 357.352h295.47v-3.561h-295.47z"
                display="inline"
            ></path>
            <path
                id="path1296"
                fill="#587582"
                fillOpacity="1"
                d="M518.079 374.973h75.112v3.724h-75.112z"
                display="inline"
            ></path>
            <path
                id="path1298"
                fill="#587582"
                fillOpacity="1"
                d="M617.789 374.973h75.113v3.724h-75.113z"
                display="inline"
            ></path>
            <path
                id="path1300"
                fill="#587582"
                fillOpacity="1"
                d="M717.23 374.894h53.582v3.725H717.23z"
                display="inline"
            ></path>
            <path
                id="path1302"
                fill="#0a0a1e"
                fillOpacity="1"
                d="M486.142 361.008h7.043v10.495h-7.043z"
                display="inline"
            ></path>
            <path
                id="path1304"
                fill="#0a0a1e"
                fillOpacity="1"
                d="M518.192 361.008h7.043v10.495h-7.043z"
                display="inline"
            ></path>
            <path
                id="path1306"
                fill="#0a0a1e"
                fillOpacity="1"
                d="M528.875 361.008h7.043v10.495h-7.043z"
                display="inline"
            ></path>
            <path
                id="path1308"
                fill="#0a0a1e"
                fillOpacity="1"
                d="M550.242 361.008h7.042v10.495h-7.042z"
                display="inline"
            ></path>
            <path
                id="path1310"
                fill="#0a0a1e"
                fillOpacity="1"
                d="M539.558 361.008h7.043v10.495h-7.043z"
                display="inline"
            ></path>
            <path
                id="path1312"
                fill="#0a0a1e"
                fillOpacity="1"
                d="M585.852 361.008h7.043v10.495h-7.043z"
                display="inline"
            ></path>
            <path
                id="path1314"
                fill="#0a0a1e"
                fillOpacity="1"
                d="M617.902 361.008h7.043v10.495h-7.043z"
                display="inline"
            ></path>
            <path
                id="path1316"
                fill="#0a0a1e"
                fillOpacity="1"
                d="M628.585 361.008h7.043v10.495h-7.043z"
                display="inline"
            ></path>
            <path
                id="path1318"
                fill="#0a0a1e"
                fillOpacity="1"
                d="M639.269 361.008h7.042v10.495h-7.042z"
                display="inline"
            ></path>
            <path
                id="path1320"
                fill="#0a0a1e"
                fillOpacity="1"
                d="M649.952 361.008h7.043v10.495h-7.043z"
                display="inline"
            ></path>
            <path
                id="path1322"
                fill="#0a0a1e"
                fillOpacity="1"
                d="M685.563 361.008h7.042v10.495h-7.042z"
                display="inline"
            ></path>
            <path
                id="path1324"
                fill="#0a0a1e"
                fillOpacity="1"
                d="M717.612 361.008h7.043v10.495h-7.043z"
                display="inline"
            ></path>
            <path
                id="path1326"
                fill="#0a0a1e"
                fillOpacity="1"
                d="M728.296 361.008h7.042v10.495h-7.042z"
                display="inline"
            ></path>
            <path
                id="path1328"
                fill="#0a0a1e"
                fillOpacity="1"
                d="M738.979 361.008h7.042v10.495h-7.042z"
                display="inline"
            ></path>
            <path
                id="path1330"
                fill="#0a0a1e"
                fillOpacity="1"
                d="M749.662 361.008h7.043v10.495h-7.043z"
                display="inline"
            ></path>
            <path
                id="path1332"
                fill="#0a0a1e"
                fillOpacity="1"
                d="M496.826 361.008h7.042v20.945h-7.042z"
                display="inline"
            ></path>
            <path
                id="path1334"
                fill="#0a0a1e"
                fillOpacity="1"
                d="M507.509 361.008h7.042v20.945h-7.042z"
                display="inline"
            ></path>
            <path
                id="path1336"
                fill="#0a0a1e"
                fillOpacity="1"
                d="M596.536 361.008h7.042v20.945h-7.042z"
                display="inline"
            ></path>
            <path
                id="path1338"
                fill="#0a0a1e"
                fillOpacity="1"
                d="M607.219 361.008h7.043v20.945h-7.043z"
                display="inline"
            ></path>
            <path
                id="path1340"
                fill="#0a0a1e"
                fillOpacity="1"
                d="M696.246 361.008h7.043v20.945h-7.043z"
                display="inline"
            ></path>
            <path
                id="path1342"
                fill="#0a0a1e"
                fillOpacity="1"
                d="M706.929 361.008h7.043v20.945h-7.043z"
                display="inline"
            ></path>
            <path
                id="path1344"
                fill="#0a0a1e"
                fillOpacity="1"
                d="M571.714 385.035v-31.244h3.308v31.244z"
                display="inline"
            ></path>
            <path
                id="path1346"
                fill="#0a0a1e"
                fillOpacity="1"
                d="M571.714 353.791v-3.661h-3.735v3.661z"
                display="inline"
            ></path>
            <path
                id="path1348"
                fill="#0a0a1e"
                fillOpacity="1"
                d="M674.985 385.035v-31.244h3.308v31.244z"
                display="inline"
            ></path>
            <path
                id="path1350"
                fill="#0a0a1e"
                fillOpacity="1"
                d="M674.985 353.791v-3.661h-3.734v3.661z"
                display="inline"
            ></path>
            <path
                id="path1352"
                fill="#587582"
                fillOpacity="1"
                d="M446.798 357.519h25.039v10.45h-25.039z"
                display="inline"
            ></path>
        </motion.g>
    )
}