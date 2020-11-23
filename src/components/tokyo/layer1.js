import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'


const Group = styled.g`
    #path4{
        fill:${props => props.isDark ? "#150d1b" : "#E7E7FF"};
    }
    #windows-l1{
        path{
            fill:${props => props.isDark ? props.theme.palette.cultured : "#99b5d0"};
        }
    }
    #g12{
        path{
            fill:${props => props.theme.palette.cultured};
        }
    }
    #g424{
        opacity:${props => props.isDark ? 1 : 0.61};
        animation: ${props => props.isDark ? "flicker 1s ease-out alternate infinite" : null};
    }

    @keyframes flicker {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0.2;
        }
    }
    .cloud{
        fill:#cad4de;
    }
`

const Layer1 = ({ isDark }) => {

    return (


        <Group
            id="layer1"
            display="inline"
            opacity="1"
            transform="translate(0 -31.23)"
            isDark={isDark}
        >
            <motion.path
                x={400}
                animate={{ x: -800 }}
                transition={{ repeat: Infinity, type: "spring", stiffness: 1, mass: 1500 }}
                d="m 720.87447,181.08712 v 1.88282 h -11.144 v 1.71912 h 22.3297 v 1.84189 h 31.3432 v -1.84189 h 25.976 v -1.76005 h -11.1852 v -1.84189 h -7.2931 v -1.88282 h -3.7692 v -1.80096 h -3.6468 v -1.84189 h -7.3337 v 1.84189 h -9.3415 v 1.80096 h -1.8437 v 1.92375 h -1.8031 v 1.84189 h -2.0072 v -1.88282 z"
                fill="#cad4de"
                className="cloud"
                id="path920" />
            <path
                d="m 467.14007,67.326698 h 3.88933 v -7.617669 h 3.86003 v -3.883585 h 3.82963 v -3.853642 h 7.77868 v -3.913421 h 20.28467 v 3.883586 h 7.74936 v 3.943256 h 3.86003 v 3.883585 h 3.82963 v 7.61767 h 3.91864 v 20.344019 h -3.85893 v 7.736576 h -3.88934 v 3.943691 h -3.89042 v 3.703926 h -7.77867 v 3.94369 h -20.07518 v -3.88294 h -7.89916 v -3.884017 h -3.82963 v -3.853642 h -3.91865 v -7.766955 h -3.86002 z"
                id="sunXmoon"
                style={{ fill: "#ffffff", strokeWidth: 1 }} />
            <path
                d="m 601.63407,77.655597 v -3.426704 h -35.237 v 4.361103 h -7.328 v -4.361103 h -7.172 v -2.803799 h -17.307 v 3.4268 h -26.194 v 6.230103 h 36.952 v 3.427 h 31.183 v -3.582 h 11.071 v -3.2714 z"
                fill="#cad4de"
                id="path918" />
            <path
                d="m 340.27707,87.809696 v 4.654 h 10.661 v 3.426002 h 61.432 v -3.582002 h 13.33 v 3.582002 h 24.908 v 3.505 h 8.069 v -3.543 h 9.784 v 3.66 h 18.71 v -3.609 h 6.236 v -4.516003 h -13.34 v -3.524 h -3.528 v -3.69 h -18.798 v 3.657 h -20.451 v -3.547 h -3.528 v -3.607 h -10.667 v -3.5243 h -11.632 v 3.5523 h -17.75 v 3.579 h -3.638 v 3.552 h -49.798 z"
                fill="#cad4de"
                id="path914" />
            <path
                d="m 1089,46.891805 v 2.37897 h -14.0807 v 2.17213 h 28.214 v 2.32726 h 39.6026 v -2.32726 h 32.8211 v -2.22384 h -14.1327 v -2.32726 h -9.215 v -2.37897 h -4.7624 v -2.27555 h -4.6078 v -2.32726 h -9.2662 v 2.32726 h -11.8031 v 2.27555 h -2.3296 v 2.43068 h -2.2782 v 2.32726 h -2.5362 v -2.37897 z"
                fill="#cad4de"
                id="path803"
                style={{ strokeWidth: 0.657883 }} />
            <path
                d="m 111.03087,42.492209 v 3.6161 H 89.627875 v 3.301699 h 42.885995 v 3.5375 h 60.19703 v -3.5375 h 49.889 v -3.380299 h -21.482 v -3.5375 h -14.007 v -3.6161 h -7.239 V 35.41721 h -7.004 v -3.5375 h -14.085 v 3.5375 h -17.94103 v 3.458899 h -3.541 v 3.6947 h -3.463 v 3.5375 h -3.855 v -3.6161 z"
                fill="#cad4de"
                id="path815" />
            <path
                d="m 1118.7146,105.0583 v -3.4267 h -35.237 v 4.3611 h -7.328 v -4.3611 h -7.172 v -2.8038 h -17.307 v 3.4268 h -26.194 v 6.2301 h 36.952 v 3.427 h 31.183 v -3.582 h 11.071 v -3.2714 z"
                fill="#cad4de"
                id="path819" />
            <path
                id="path4"
                fill="#121235"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M911.908 111.912v32.347h-3.887v8.22h-16.07v12.332h4.061v3.752h11.834v36.46h-3.71v32.527h-4.062v13.224H863.69l.063-43.163-7.575-.009-.083 43.707h-46.273v13.403h-11.657v13.224H771.98v37.588h-31.947v-15.968h-8.037v3.972h4.063V315.524h-51.976v-15.968h-8.037v3.972h4.063V315.524h-51.976v-15.968h-8.035v3.972h4.061V315.524h-51.976v-15.968h-8.035v3.972h4.062V315.524h-46.626l-69.503.261v-64.027h-27.6V388.69l-20.042.24v-101.24h3.87v-3.99h-3.995v-12.04h4.12v-3.87h-4.12v-12.04h3.932v-3.927h-3.87v-12.165h4.059v-3.994h-3.996v-11.79h3.932v-3.991h-4.057v-11.977h4.057v-8.037H312.47v58.03l-43.818-.338V151.95h-11.725v105.691l-36.402.055V124.15h-7.488v107.547h-4.377v-63.722h-7.992v-7.992H152.71v-28.14H32.976v16.07l-32.067-.01-.408 322.42 220.024-.002 91.945-.002h91.969l47.642-.002V327.363h104.157v3.869h3.995v64.13h-12.068v75.523h80.008l68.064-.565h299.354v-.002h279.938V179.893h-20.044V456.87l-30.636.042v-225.08h-117.123v198.014h-16.02V199.313c0 .05-8.126.167-8.126.167v230.366h-39.783V199.824h-4.02v-8.03h-16.024v7.938h7.985v230.114H995.59v-204.45h-72.027V205.2h-3.884v-36.637h11.832v-4.287h4.063v-11.797H919.68v-8.4h-3.886v-32.167zm-283.985 215.45h40.212v4.12h3.998v32.062H660.27v86.994l-32.096.2V395.36h-4.37v-64.005h4.12zm112.023 0h32.034v19.116h-36.155v-15.122h4.12zm-56.073.126h40.337v3.868h4.123v15.122h-.283v17.066h-48.175v-32.063h3.998zm-111.775.125h40.214v3.868h3.996v63.88h-48.33v-63.88h4.12z"
            ></path>
            <g
                id="g12"
                fill="#fff"
                transform="matrix(1.12224 0 0 1.12224 0 -57.574)"
            >
                <path id="path52" d="M506.317 321.768v3.69h-3.62v-3.69z"></path>
                <path id="path58" d="M606.027 321.768v3.69h-3.62v-3.69z"></path>
                <path id="path876" d="M556.172 321.768v3.69h-3.62v-3.69z"></path>
                <path id="path902" d="M655.882 321.768v3.69h-3.62v-3.69z"></path>
            </g>
            <motion.rect
                fill="#fef"
                initial={{ x: 892, y: 156 }}
                height={8}
                width={10}
                animate={{
                    x: [892, 892, 920, 935],
                    width: [0, 10, 11, 0]
                }}
                transition={{
                    linear: [0, .33, .7, 1],
                    repeat: Infinity,
                    duration: 9
                }}
            />
            <g
                id="windows-l1"
            >

                <path
                    id="path800"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M775.908 335.521h8.124v4.058h-8.124z"
                ></path>
                <path
                    id="path802"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M787.897 335.521h8.124v4.058h-8.124z"
                ></path>
                <path
                    id="path804"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M787.897 327.536h8.124v4.058h-8.124z"
                ></path>
                <path
                    id="path806"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M787.897 319.552h8.124v4.058h-8.124z"
                ></path>
                <path
                    id="path808"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M787.897 311.567h8.124v4.058h-8.124z"
                ></path>
                <path
                    id="path810"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M787.897 303.582h8.124v4.058h-8.124z"
                ></path>
                <path
                    id="path812"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M787.897 295.596h8.124v4.06h-8.124z"
                ></path>
                <path
                    id="path814"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M787.897 287.612h8.124v4.059h-8.124z"
                ></path>
                <path
                    id="path816"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M787.897 279.627h8.124v4.058h-8.124z"
                ></path>
                <path
                    id="path818"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M775.908 279.627h8.124v4.058h-8.124z"
                ></path>
                <path
                    id="path820"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M775.908 287.612h8.124v4.059h-8.124z"
                ></path>
                <path
                    id="path822"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M775.908 295.596h8.124v4.06h-8.124z"
                ></path>
                <path
                    id="path824"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M775.908 303.582h8.124v4.058h-8.124z"
                ></path>
                <path
                    id="path826"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M775.908 311.567h8.124v4.058h-8.124z"
                ></path>
                <path
                    id="path828"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M775.908 319.552h8.124v4.058h-8.124z"
                ></path>
                <path
                    id="path830"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M775.908 327.536h8.124v4.058h-8.124z"
                ></path>
                <path
                    id="path832"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M743.936 419.362h8.124v4.059h-8.124z"
                ></path>
                <path
                    id="path834"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M743.936 411.377h8.124v4.058h-8.124z"
                ></path>
                <path
                    id="path836"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M756.28 411.377h8.126v4.058h-8.125z"
                ></path>
                <path
                    id="path838"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M756.28 403.392h8.126v4.058h-8.125z"
                ></path>
                <path
                    id="path840"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M743.936 403.392h8.124v4.058h-8.124z"
                ></path>
                <path
                    id="path842"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M731.948 403.392h8.123v4.058h-8.123z"
                ></path>
                <path
                    id="path844"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M731.948 395.407h8.123v4.059h-8.123z"
                ></path>
                <path
                    id="path846"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M743.936 395.407h8.124v4.059h-8.124z"
                ></path>
                <path
                    id="path848"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M756.28 395.407h8.126v4.059h-8.125z"
                ></path>
                <path
                    id="path636"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M1059.87 283.722h3.93v3.97h-3.93z"
                ></path>
                <path
                    id="path638"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M1051.877 283.722h3.93v3.97h-3.93z"
                ></path>
                <path
                    id="path640"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M1067.862 283.722h3.93v3.97h-3.93z"
                ></path>
                <path
                    id="path642"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M1067.862 275.737h3.93v3.97h-3.93z"
                ></path>
                <path
                    id="path644"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M1075.854 275.737h3.93v3.97h-3.93z"
                ></path>
                <path
                    id="path646"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M1075.854 267.752h3.93v3.97h-3.93z"
                ></path>
                <path
                    id="path648"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M1067.862 267.752h3.93v3.97h-3.93z"
                ></path>
                <path
                    id="path650"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M1059.87 267.752h3.93v3.97h-3.93z"
                ></path>
                <path
                    id="path652"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M1059.87 275.737h3.93v3.97h-3.93z"
                ></path>
                <path
                    id="path654"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M1051.877 275.737h3.93v3.97h-3.93z"
                ></path>
                <path
                    id="path656"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M1051.877 267.752h3.93v3.97h-3.93z"
                ></path>
                <path
                    id="path658"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M1067.75 243.67v4.124h12.034v-4.124z"
                ></path>
                <path
                    id="path660"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M1051.766 243.67v4.124h12.031v-4.124z"
                ></path>
                <path
                    id="path670"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M1067.75 291.579v4.124h12.034v-4.124z"
                ></path>
                <path
                    id="path676"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M1051.766 291.579v4.124h12.031v-4.124z"
                ></path>
                <path
                    id="path686"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M1259.605 183.887h3.928v3.867h-3.928z"
                ></path>
                <path
                    id="path688"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M1267.595 183.887h3.94v3.867h-3.94z"
                ></path>
                <path
                    id="path690"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M1267.595 191.872h3.94v3.867h-3.94z"
                ></path>
                <path
                    id="path692"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M1259.605 191.872h3.928v3.867h-3.928z"
                ></path>
                <path
                    id="path694"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M1259.605 199.857h3.928v3.867h-3.928z"
                ></path>
                <path
                    id="path696"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M1267.595 199.857h3.94v3.867h-3.94z"
                ></path>
                <path
                    id="path698"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M1267.595 207.841h3.94v3.868h-3.94z"
                ></path>
                <path
                    id="path700"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M1259.605 207.841h3.928v3.868h-3.928z"
                ></path>
                <path
                    id="path702"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M1207.589 183.824h11.986v3.93h-11.986z"
                ></path>
                <path
                    id="path704"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M1223.57 183.824h11.997v3.93h-11.997z"
                ></path>
                <path
                    id="path706"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M1239.562 183.824h11.985v3.93h-11.985z"
                ></path>
                <path
                    id="path708"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M1239.562 191.809h11.985v3.93h-11.985z"
                ></path>
                <path
                    id="path710"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M1223.57 191.809h11.997v3.93h-11.997z"
                ></path>
                <path
                    id="path712"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M1207.589 191.809h11.986v3.93h-11.986z"
                ></path>
                <path
                    id="path714"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M1207.589 199.794h11.986v3.93h-11.986z"
                ></path>
                <path
                    id="path716"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M1223.57 199.794h11.997v3.93h-11.997z"
                ></path>
                <path
                    id="path718"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M1239.562 199.794h11.985v3.93h-11.985z"
                ></path>
                <path
                    id="path720"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M1239.562 207.779h11.985v3.93h-11.985z"
                ></path>
                <path
                    id="path722"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M1223.57 207.779h11.997v3.93h-11.997z"
                ></path>
                <path
                    id="path724"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M1207.589 207.779h11.986v3.93h-11.986z"
                ></path>
                <path
                    id="path728"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M1187.422 239.936v7.736h-3.625v-7.736z"
                ></path>
                <path
                    id="path730"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M1195.413 239.936v7.736h-3.625v-7.736z"
                ></path>
                <path
                    id="path732"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M1195.413 255.907v7.735h-3.625v-7.735z"
                ></path>
                <path
                    id="path734"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M1195.413 271.877v7.734h-3.625v-7.734z"
                ></path>
                <path
                    id="path736"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M1195.413 287.846v7.736h-3.625v-7.736z"
                ></path>
                <path
                    id="path738"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M1187.422 287.846v7.736h-3.625v-7.736z"
                ></path>
                <path
                    id="path740"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M1187.422 271.877v7.734h-3.625v-7.734z"
                ></path>
                <path
                    id="path742"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M1187.422 255.907v7.735h-3.625v-7.735z"
                ></path>
                <path
                    id="path744"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M1163.44 255.907v7.735h-3.625v-7.735z"
                ></path>
                <path
                    id="path746"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M1171.43 255.907v7.735h-3.613v-7.735z"
                ></path>
                <path
                    id="path748"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M1171.43 239.936v7.736h-3.613v-7.736z"
                ></path>
                <path
                    id="path750"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M1163.44 239.936v7.736h-3.625v-7.736z"
                ></path>
                <path
                    id="path752"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M1163.44 271.877v7.734h-3.625v-7.734z"
                ></path>
                <path
                    id="path754"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M1171.43 271.877v7.734h-3.613v-7.734z"
                ></path>
                <path
                    id="path756"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M1171.43 287.846v7.736h-3.613v-7.736z"
                ></path>
                <path
                    id="path758"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M1163.44 287.846v7.736h-3.625v-7.736z"
                ></path>
                <path
                    id="path760"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M1139.458 287.846v7.736h-3.614v-7.736z"
                ></path>
                <path
                    id="path762"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M1147.46 287.846v7.736h-3.626v-7.736z"
                ></path>
                <path
                    id="path764"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M1147.46 271.877v7.734h-3.626v-7.734z"
                ></path>
                <path
                    id="path766"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M1139.458 271.877v7.734h-3.614v-7.734z"
                ></path>
                <path
                    id="path768"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M1115.483 271.877v7.734h-3.621v-7.734z"
                ></path>
                <path
                    id="path770"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M1115.483 287.846v7.736h-3.621v-7.736z"
                ></path>
                <path
                    id="path772"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M1123.477 287.846v7.736h-3.623v-7.736z"
                ></path>
                <path
                    id="path774"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M1123.477 271.877v7.734h-3.623v-7.734z"
                ></path>
                <path
                    id="path776"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M1123.477 255.907v7.735h-3.623v-7.735z"
                ></path>
                <path
                    id="path778"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M1123.477 239.936v7.736h-3.623v-7.736z"
                ></path>
                <path
                    id="path780"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M1115.483 239.936v7.736h-3.621v-7.736z"
                ></path>
                <path
                    id="path782"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M1115.483 255.907v7.735h-3.621v-7.735z"
                ></path>
                <path
                    id="path784"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M1139.458 255.907v7.735h-3.614v-7.735z"
                ></path>
                <path
                    id="path786"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M1147.46 255.907v7.735h-3.626v-7.735z"
                ></path>
                <path
                    id="path788"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M1147.46 239.936v7.736h-3.626v-7.736z"
                ></path>
                <path
                    id="path790"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M1139.458 239.936v7.736h-3.614v-7.736z"
                ></path>
                <path
                    id="path794"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M1207.589 215.764h11.986v3.93h-11.986z"
                ></path>
                <path
                    id="path796"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M1207.589 223.75h11.986v3.93h-11.986z"
                ></path>
                <path
                    id="path480"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M556.3 399.602h7.869v7.799H556.3z"
                ></path>
                <path
                    id="path482"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M592.269 399.602h7.867v7.799h-7.867z"
                ></path>
                <path
                    id="path484"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M580.279 399.602h7.868v7.799h-7.868z"
                ></path>
                <path
                    id="path486"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M568.29 399.602h7.868v7.799h-7.868z"
                ></path>
                <path
                    id="path488"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M568.29 415.573h7.868v7.797h-7.868z"
                ></path>
                <path
                    id="path490"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M556.3 415.573h7.869v7.797H556.3z"
                ></path>
                <path
                    id="path492"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M580.279 415.573h7.868v7.797h-7.868z"
                ></path>
                <path
                    id="path494"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M592.269 415.573h7.867v7.797h-7.867z"
                ></path>
                <path
                    id="path496"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M592.269 431.543h7.867v7.797h-7.867z"
                ></path>
                <path
                    id="path498"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M580.279 431.543h7.868v7.797h-7.868z"
                ></path>
                <path
                    id="path500"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M568.29 431.543h7.868v7.797h-7.868z"
                ></path>
                <path
                    id="path502"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M556.3 431.543h7.869v7.797H556.3z"
                ></path>
                <path
                    id="path506"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M568.29 447.512h7.868v7.797h-7.868z"
                ></path>
                <path
                    id="path508"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M580.279 447.512h7.868v7.797h-7.868z"
                ></path>
                <path
                    id="path20"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M916.038 299.73h11.74v3.867h-11.74z"
                ></path>
                <path
                    id="path22"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M916.038 311.707h11.74v3.867h-11.74z"
                ></path>
                <path
                    id="path24"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M916.038 323.684h11.74v3.868h-11.74z"
                ></path>
                <path
                    id="path26"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M932.024 323.684h11.74v3.868h-11.74z"
                ></path>
                <path
                    id="path28"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M932.024 311.707h11.74v3.867h-11.74z"
                ></path>
                <path
                    id="path30"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M932.024 299.73h11.74v3.867h-11.74z"
                ></path>
                <path
                    id="path32"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M948.01 299.73h11.74v3.867h-11.74z"
                ></path>
                <path
                    id="path34"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M948.01 311.707h11.74v3.867h-11.74z"
                ></path>
                <path
                    id="path36"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M948.01 323.684h11.74v3.868h-11.74z"
                ></path>
                <path
                    id="path38"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M948.01 335.661h11.74v3.868h-11.74z"
                ></path>
                <path
                    id="path40"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M948.01 347.64h11.74v3.866h-11.74z"
                ></path>
                <path
                    id="path42"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M948.01 359.616h11.74v3.868h-11.74z"
                ></path>
                <path
                    id="path44"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M932.024 359.616h11.74v3.868h-11.74z"
                ></path>
                <path
                    id="path46"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M932.024 347.64h11.74v3.866h-11.74z"
                ></path>
                <path
                    id="path48"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M932.024 335.661h11.74v3.868h-11.74z"
                ></path>
                <path
                    id="path532"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M971.988 227.991v7.61h3.747v-7.61z"
                ></path>
                <path
                    id="path574"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M948.01 239.843h11.74v3.867h-11.74z"
                ></path>
                <path
                    id="path576"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M932.024 239.843h11.74v3.867h-11.74z"
                ></path>
                <path
                    id="path578"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M916.038 239.843h11.74v3.867h-11.74z"
                ></path>
                <path
                    id="path580"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M916.038 251.82h11.74v3.868h-11.74z"
                ></path>
                <path
                    id="path582"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M932.024 251.82h11.74v3.868h-11.74z"
                ></path>
                <path
                    id="path584"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M948.01 251.82h11.74v3.868h-11.74z"
                ></path>
                <path
                    id="path586"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M948.01 263.798h11.74v3.868h-11.74z"
                ></path>
                <path
                    id="path588"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M932.024 263.798h11.74v3.868h-11.74z"
                ></path>
                <path
                    id="path590"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M916.038 263.798h11.74v3.868h-11.74z"
                ></path>
                <path
                    id="path592"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M916.038 275.775h11.74v3.867h-11.74z"
                ></path>
                <path
                    id="path594"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M932.024 275.775h11.74v3.867h-11.74z"
                ></path>
                <path
                    id="path596"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M948.01 275.775h11.74v3.867h-11.74z"
                ></path>
                <path
                    id="path598"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M948.01 287.752h11.74v3.868h-11.74z"
                ></path>
                <path
                    id="path600"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M932.024 287.752h11.74v3.868h-11.74z"
                ></path>
                <path
                    id="path602"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M916.038 287.752h11.74v3.868h-11.74z"
                ></path>
                <path
                    id="path604"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M971.988 239.968v7.61h3.747v-7.61z"
                ></path>
                <path
                    id="path606"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M971.988 251.946v7.61h3.747v-7.61z"
                ></path>
                <path
                    id="path608"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M971.988 263.922v7.611h3.747v-7.61z"
                ></path>
                <path
                    id="path610"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M971.988 275.9v7.61h3.747v-7.61z"
                ></path>
                <path
                    id="path662"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M971.988 287.877v7.61h3.747v-7.61z"
                ></path>
                <path
                    id="path664"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M971.988 299.854v7.611h3.747v-7.61z"
                ></path>
                <path
                    id="path1773"
                    fill="#999"
                    strokeWidth="1.122"
                    d="M932.024 229.376h11.74v3.867h-11.74z"
                ></path>
                <path
                    id="path1775"
                    fill="#999"
                    strokeWidth="1.122"
                    d="M916.313 229.376h11.739v3.867h-11.739z"
                ></path>
                <path
                    id="path1777"
                    fill="#999"
                    strokeWidth="1.122"
                    d="M947.736 229.376h11.739v3.867h-11.74z"
                ></path>
                <path
                    id="path64"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M260.969 164.388h3.047v3.09h-3.047z"
                ></path>
                <path
                    id="path202"
                    fill="#eaecf1"
                    fillOpacity="1"
                    strokeWidth="1.122"
                    d="M292.928 144.426h3.123v7.015h-3.123z"
                ></path>
                <path
                    id="path204"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M280.017 156.354v3.12h-7.022v-3.12z"
                ></path>
                <path
                    id="path206"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M303.995 156.354v3.12h-7.021v-3.12z"
                ></path>
                <path
                    id="path208"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M303.995 164.339v3.12h-7.021v-3.12z"
                ></path>
                <path
                    id="path210"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M292.006 164.339v3.12h-7.022v-3.12z"
                ></path>
                <path
                    id="path212"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M292.006 156.354v3.12h-7.022v-3.12z"
                ></path>
                <path
                    id="path214"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M280.017 164.339v3.12h-7.022v-3.12z"
                ></path>
                <path
                    id="path216"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M280.017 172.323v3.121h-7.022v-3.12z"
                ></path>
                <path
                    id="path218"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M292.006 172.323v3.121h-7.022v-3.12z"
                ></path>
                <path
                    id="path220"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M303.995 172.323v3.121h-7.021v-3.12z"
                ></path>
                <path
                    id="path222"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M303.995 180.308v3.121h-7.021v-3.12z"
                ></path>
                <path
                    id="path224"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M292.006 180.308v3.121h-7.022v-3.12z"
                ></path>
                <path
                    id="path226"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M280.017 180.308v3.121h-7.022v-3.12z"
                ></path>
                <path
                    id="path228"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M280.017 188.293v3.12h-7.022v-3.12z"
                ></path>
                <path
                    id="path230"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M280.017 196.278v3.12h-7.022v-3.12z"
                ></path>
                <path
                    id="path232"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M292.006 196.278v3.12h-7.022v-3.12z"
                ></path>
                <path
                    id="path234"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M292.006 188.293v3.12h-7.022v-3.12z"
                ></path>
                <path
                    id="path236"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M303.995 188.293v3.12h-7.021v-3.12z"
                ></path>
                <path
                    id="path238"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M303.995 196.278v3.12h-7.021v-3.12z"
                ></path>
                <path
                    id="path240"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M260.969 156.403h3.047v3.09h-3.047z"
                ></path>
                <path
                    id="path242"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M260.969 172.373h3.047v3.09h-3.047z"
                ></path>
                <path
                    id="path244"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M260.969 180.358h3.047v3.09h-3.047z"
                ></path>
                <path
                    id="path246"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M260.969 188.342h3.047v3.091h-3.047z"
                ></path>
                <path
                    id="path248"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M260.969 196.328h3.047v3.09h-3.047z"
                ></path>
                <path
                    id="path266"
                    fill="#eaecf1"
                    fillOpacity="1"
                    strokeWidth="1.122"
                    d="M276.93 144.352h11.166v7.2h-11.167z"
                ></path>
                <path
                    id="path284"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M336.913 208.326h3.04v11.013h-3.04z"
                ></path>
                <path
                    id="path286"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M336.913 272.204h3.04v11.013h-3.04z"
                ></path>
                <path
                    id="path288"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M336.913 256.235h3.04v11.012h-3.04z"
                ></path>
                <path
                    id="path290"
                    fill="#f3f5f4"
                    fillOpacity="1"
                    strokeWidth="1.122"
                    d="M336.913 240.265h3.04v11.013h-3.04z"
                ></path>
                <path
                    id="path292"
                    fill="#f3f5f4"
                    fillOpacity="1"
                    strokeWidth="1.122"
                    d="M336.913 224.296h3.04v11.012h-3.04z"
                ></path>
                <path
                    id="path294"
                    fill="#f3f5f4"
                    fillOpacity="1"
                    strokeWidth="1.122"
                    d="M364.919 272.196h6.99v10.97h-6.99z"
                ></path>
                <path
                    id="path296"
                    fill="#f3f5f4"
                    fillOpacity="1"
                    strokeWidth="1.122"
                    d="M364.919 256.227h6.99v10.97h-6.99z"
                ></path>
                <path
                    id="path298"
                    fill="#f3f5f4"
                    fillOpacity="1"
                    strokeWidth="1.122"
                    d="M376.908 256.227h6.99v10.97h-6.99z"
                ></path>
                <path
                    id="path300"
                    fill="#f3f5f4"
                    fillOpacity="1"
                    strokeWidth="1.122"
                    d="M376.908 240.256h6.99v10.97h-6.99z"
                ></path>
                <path
                    id="path302"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M364.919 240.256h6.99v10.97h-6.99z"
                ></path>
                <path
                    id="path304"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M352.929 240.256h6.99v10.97h-6.99z"
                ></path>
                <path
                    id="path306"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M352.929 256.227h6.99v10.97h-6.99z"
                ></path>
                <path
                    id="path308"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M352.929 224.287h6.99v10.97h-6.99z"
                ></path>
                <path
                    id="path310"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M364.919 224.287h6.99v10.97h-6.99z"
                ></path>
                <path
                    id="path312"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M376.908 224.287h6.99v10.97h-6.99z"
                ></path>
                <path
                    id="path314"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M352.929 320.105h6.99v10.97h-6.99z"
                ></path>
                <path
                    id="path318"
                    fill="#f3f5f4"
                    fillOpacity="1"
                    strokeWidth="1.122"
                    d="M376.908 288.166h6.99v10.97h-6.99z"
                ></path>
                <path
                    id="path320"
                    fill="#f3f5f4"
                    fillOpacity="1"
                    strokeWidth="1.122"
                    d="M364.919 288.166h6.99v10.97h-6.99z"
                ></path>
                <path
                    id="path322"
                    fill="#f3f5f4"
                    fillOpacity="1"
                    strokeWidth="1.122"
                    d="M352.929 288.166h6.99v10.97h-6.99z"
                ></path>
                <path
                    id="path324"
                    fill="#f3f5f4"
                    fillOpacity="1"
                    strokeWidth="1.122"
                    d="M352.929 304.135h6.99v10.97h-6.99z"
                ></path>
                <path
                    id="path326"
                    fill="#fff6d5"
                    fillOpacity="1"
                    strokeWidth="1.122"
                    d="M364.919 304.135h6.99v10.97h-6.99z"
                ></path>
                <path
                    id="path328"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M376.908 304.135h6.99v10.97h-6.99z"
                ></path>
                <path
                    id="path330"
                    fill="#f3f5f4"
                    fillOpacity="1"
                    strokeWidth="1.122"
                    d="M376.908 320.105h6.99v10.97h-6.99z"
                ></path>
                <path
                    id="path332"
                    fill="#f3f5f4"
                    fillOpacity="1"
                    strokeWidth="1.122"
                    d="M364.919 320.105h6.99v10.97h-6.99z"
                ></path>
                <path
                    id="path384"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M336.913 320.114h3.04v11.013h-3.04z"
                ></path>
                <path
                    id="path388"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M352.929 208.317h6.99v10.97h-6.99z"
                ></path>
                <path
                    id="path390"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M336.913 304.144h3.04v11.013h-3.04z"
                ></path>
                <path
                    id="path392"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M336.913 288.174h3.04v11.012h-3.04z"
                ></path>
                <path
                    id="path394"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M376.908 208.317h6.99v10.97h-6.99z"
                ></path>
                <path
                    id="path396"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M364.919 208.317h6.99v10.97h-6.99z"
                ></path>
                <path
                    id="path398"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M388.897 208.317h6.99v10.97h-6.99z"
                ></path>
                <path
                    id="path400"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M388.897 224.287h6.99v10.97h-6.99z"
                ></path>
                <path
                    id="path402"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M388.897 240.256h6.99v10.97h-6.99z"
                ></path>
                <path
                    id="path404"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M388.897 256.227h6.99v10.97h-6.99z"
                ></path>
                <path
                    id="path406"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M388.897 272.196h6.99v10.97h-6.99z"
                ></path>
                <path
                    id="path408"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M376.908 272.196h6.99v10.97h-6.99z"
                ></path>
                <path
                    id="path410"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M352.929 272.196h6.99v10.97h-6.99z"
                ></path>
                <path
                    id="path412"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M388.897 288.166h6.99v10.97h-6.99z"
                ></path>
                <path
                    id="path198"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M228.985 116.48h3.124v7.014h-3.124z"
                ></path>
                <path
                    id="path200"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M236.978 116.48h3.124v7.014h-3.124z"
                ></path>
                <path
                    id="path250"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M224.964 128.438v3.151h19.168v-3.15z"
                ></path>
                <path
                    id="path252"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M224.964 136.423v3.151h19.168v-3.151z"
                ></path>
                <path
                    id="path254"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M224.964 144.408v3.15h19.168v-3.15z"
                ></path>
                <path
                    id="path256"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M224.964 160.377v3.153h19.168v-3.153z"
                ></path>
                <path
                    id="path258"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M224.964 168.362v3.152h19.168v-3.152z"
                ></path>
                <path
                    id="path260"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M224.964 176.347v3.152h19.168v-3.152z"
                ></path>
                <path
                    id="path262"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M224.964 192.316v3.153h19.168v-3.153z"
                ></path>
                <path
                    id="path264"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M224.964 200.301v3.152h19.168v-3.152z"
                ></path>
                <path
                    id="path272"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M224.995 208.255h11.167v3.215h-11.167z"
                ></path>
                <path
                    id="path74"
                    fill="#eaecf1"
                    fillOpacity="1"
                    strokeWidth="1.122"
                    d="M17.195 152.447h15.048v7.016H17.195z"
                ></path>
                <path
                    id="path76"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M37.177 152.447h15.048v7.016H37.177z"
                ></path>
                <path
                    id="path78"
                    fill="#eaecf1"
                    fillOpacity="1"
                    strokeWidth="1.122"
                    d="M37.177 164.425h15.048v7.015H37.177z"
                ></path>
                <path
                    id="path80"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M17.195 164.425h15.048v7.015H17.195z"
                ></path>
                <path
                    id="path82"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M17.195 176.403h15.048v7.014H17.195z"
                ></path>
                <path
                    id="path84"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M17.195 188.38h15.048v7.015H17.195z"
                ></path>
                <path
                    id="path86"
                    fill="#eaecf1"
                    fillOpacity="1"
                    strokeWidth="1.122"
                    d="M37.177 188.38h15.048v7.015H37.177z"
                ></path>
                <path
                    id="path88"
                    fill="#eaecf1"
                    fillOpacity="1"
                    strokeWidth="1.122"
                    d="M37.177 176.403h15.048v7.014H37.177z"
                ></path>
                <path
                    id="path90"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M61.165 136.457h3.03v7.014h-3.03z"
                ></path>
                <path
                    id="path92"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M69.157 136.457h3.032v7.014h-3.032z"
                ></path>
                <path
                    id="path94"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M69.157 148.434h3.032v7.014h-3.032z"
                ></path>
                <path
                    id="path96"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M61.165 148.434h3.03v7.014h-3.03z"
                ></path>
                <path
                    id="path98"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M61.165 168.396h3.03v7.015h-3.03z"
                ></path>
                <path
                    id="path100"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M69.157 168.396h3.032v7.015h-3.032z"
                ></path>
                <path
                    id="path102"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M61.165 180.373h3.03v7.015h-3.03z"
                ></path>
                <path
                    id="path104"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M69.157 180.373h3.032v7.015h-3.032z"
                ></path>
                <path
                    id="path106"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M61.165 200.336h3.03v7.014h-3.03z"
                ></path>
                <path
                    id="path108"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M69.157 200.336h3.032v7.014h-3.032z"
                ></path>
                <path
                    id="path110"
                    fill="#eaecf1"
                    fillOpacity="1"
                    strokeWidth="1.122"
                    d="M180.088 204.325v3.029h-7.021v-3.03z"
                ></path>
                <path
                    id="path112"
                    fill="#eaecf1"
                    fillOpacity="1"
                    strokeWidth="1.122"
                    d="M204.067 180.37v3.029h-7.022v-3.03z"
                ></path>
                <path
                    id="path114"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M192.078 172.385v3.03h-7.022v-3.03z"
                ></path>
                <path
                    id="path116"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M204.067 188.355v3.029h-7.022v-3.03z"
                ></path>
                <path
                    id="path118"
                    fill="#eaecf1"
                    fillOpacity="1"
                    strokeWidth="1.122"
                    d="M192.078 204.325v3.029h-7.022v-3.03z"
                ></path>
                <path
                    id="path120"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M180.088 180.37v3.029h-7.021v-3.03z"
                ></path>
                <path
                    id="path122"
                    fill="#eaecf1"
                    fillOpacity="1"
                    strokeWidth="1.122"
                    d="M204.067 172.385v3.03h-7.022v-3.03z"
                ></path>
                <path
                    id="path124"
                    fill="#eaecf1"
                    fillOpacity="1"
                    strokeWidth="1.122"
                    d="M204.067 212.31v3.028h-7.022v-3.028z"
                ></path>
                <path
                    id="path126"
                    fill="#eaecf1"
                    fillOpacity="1"
                    strokeWidth="1.122"
                    d="M204.066 220.294v3.03h-7.02v-3.03z"
                ></path>
                <path
                    id="path128"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M180.088 196.34v3.028h-7.021v-3.029z"
                ></path>
                <path
                    id="path130"
                    fill="#eaecf1"
                    fillOpacity="1"
                    strokeWidth="1.122"
                    d="M180.088 220.295v3.028h-7.021v-3.028z"
                ></path>
                <path
                    id="path132"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M192.078 188.355v3.029h-7.022v-3.03z"
                ></path>
                <path
                    id="path134"
                    fill="#eaecf1"
                    fillOpacity="1"
                    strokeWidth="1.122"
                    d="M180.088 172.386v3.028h-7.022v-3.028z"
                ></path>
                <path
                    id="path136"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M204.067 204.325v3.028h-7.022v-3.028z"
                ></path>
                <path
                    id="path138"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M204.067 196.34v3.028h-7.022v-3.029z"
                ></path>
                <path
                    id="path140"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M89.103 136.416h11.11v7.123h-11.11z"
                ></path>
                <path
                    id="path142"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M89.103 136.416h11.11v7.123h-11.11z"
                ></path>
                <path
                    id="path144"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M105.088 136.416H116.2v7.123h-11.112z"
                ></path>
                <path
                    id="path146"
                    fill="#eaecf1"
                    fillOpacity="1"
                    strokeWidth="1.122"
                    d="M121.073 136.416h11.112v7.123h-11.112z"
                ></path>
                <path
                    id="path148"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M137.06 136.416h11.11v7.123h-11.11z"
                ></path>
                <path
                    id="path150"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M137.06 148.393h11.11v7.124h-11.11z"
                ></path>
                <path
                    id="path152"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M137.06 168.355h11.11v7.123h-11.11z"
                ></path>
                <path
                    id="path154"
                    fill="#eaecf1"
                    fillOpacity="1"
                    strokeWidth="1.122"
                    d="M137.06 180.333h11.11v7.123h-11.11z"
                ></path>
                <path
                    id="path156"
                    fill="#eaecf1"
                    fillOpacity="1"
                    strokeWidth="1.122"
                    d="M121.073 180.333h11.112v7.123h-11.112z"
                ></path>
                <path
                    id="path158"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M121.073 168.355h11.112v7.123h-11.112z"
                ></path>
                <path
                    id="path160"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M105.088 168.355H116.2v7.123h-11.112z"
                ></path>
                <path
                    id="path162"
                    fill="#eaecf1"
                    fillOpacity="1"
                    strokeWidth="1.122"
                    d="M105.088 180.333H116.2v7.123h-11.112z"
                ></path>
                <path
                    id="path164"
                    fill="#eaecf1"
                    fillOpacity="1"
                    strokeWidth="1.122"
                    d="M89.103 180.333h11.11v7.123h-11.11z"
                ></path>
                <path
                    id="path166"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M89.103 168.355h11.11v7.123h-11.11z"
                ></path>
                <path
                    id="path168"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M89.103 148.393h11.11v7.124h-11.11z"
                ></path>
                <path
                    id="path170"
                    fill="#eaecf1"
                    fillOpacity="1"
                    strokeWidth="1.122"
                    d="M105.088 148.393H116.2v7.124h-11.112z"
                ></path>
                <path
                    id="path172"
                    fill="#eaecf1"
                    fillOpacity="1"
                    strokeWidth="1.122"
                    d="M121.073 148.393h11.112v7.124h-11.112z"
                ></path>
                <path
                    id="path174"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M89.103 200.295h11.11v7.123h-11.11z"
                ></path>
                <path
                    id="path176"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M105.088 200.295H116.2v7.123h-11.112z"
                ></path>
                <path
                    id="path178"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M121.073 200.295h11.112v7.123h-11.112z"
                ></path>
                <path
                    id="path180"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M137.06 200.295h11.11v7.123h-11.11z"
                ></path>
                <path
                    id="path182"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M153.09 164.602v2.83h3.018v-3.015h-3.018z"
                ></path>
                <path
                    id="path184"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M161.083 164.602v2.83h3.017v-3.015h-3.017z"
                ></path>
                <path
                    id="path186"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M169.075 164.602v2.83h3.018v-3.015h-3.018z"
                ></path>
                <path
                    id="path188"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M177.068 164.602v2.83h3.019v-3.015h-3.02z"
                ></path>
                <path
                    id="path190"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M185.06 164.602v2.83h3.02v-3.015h-3.02z"
                ></path>
                <path
                    id="path192"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M193.053 164.602v2.83h3.019v-3.015h-3.019z"
                ></path>
                <path
                    id="path334"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M17.195 208.342h15.048v7.015H17.195z"
                ></path>
                <path
                    id="path336"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M37.177 208.342h15.048v7.015H37.177z"
                ></path>
                <path
                    id="path338"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M37.177 220.32h15.048v7.014H37.177z"
                ></path>
                <path
                    id="path340"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M17.195 220.32h15.048v7.014H17.195z"
                ></path>
                <path
                    id="path342"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M69.157 212.312h3.032v7.016h-3.032z"
                ></path>
                <path
                    id="path344"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M61.165 212.312h3.03v7.016h-3.03z"
                ></path>
                <path
                    id="path346"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M64.73 232.3h-3.547v3.706h3.546z"
                ></path>
                <path
                    id="path348"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M72.722 232.3h-3.546v3.706h3.546z"
                ></path>
                <path
                    id="path350"
                    fill="#eaecf1"
                    fillOpacity="1"
                    strokeWidth="1.122"
                    d="M192.077 180.37v3.028h-7.02v-3.027z"
                ></path>
                <path
                    id="path352"
                    fill="#eaecf1"
                    fillOpacity="1"
                    strokeWidth="1.122"
                    d="M180.088 188.355v3.028h-7.022v-3.028z"
                ></path>
                <path
                    id="path354"
                    fill="#eaecf1"
                    fillOpacity="1"
                    strokeWidth="1.122"
                    d="M180.088 212.31v3.028h-7.022v-3.028z"
                ></path>
                <path
                    id="path356"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M204.067 228.28v3.027h-7.022v-3.027z"
                ></path>
                <path
                    id="path358"
                    fill="#eaecf1"
                    fillOpacity="1"
                    strokeWidth="1.122"
                    d="M192.078 212.31v3.028h-7.022v-3.028z"
                ></path>
                <path
                    id="path360"
                    fill="#eaecf1"
                    fillOpacity="1"
                    strokeWidth="1.122"
                    d="M89.103 212.272h11.11v7.123h-11.11z"
                ></path>
                <path
                    id="path362"
                    fill="#eaecf1"
                    fillOpacity="1"
                    strokeWidth="1.122"
                    d="M105.088 212.272H116.2v7.123h-11.112z"
                ></path>
                <path
                    id="path364"
                    fill="#eaecf1"
                    fillOpacity="1"
                    strokeWidth="1.122"
                    d="M121.073 212.272h11.112v7.123h-11.112z"
                ></path>
                <path
                    id="path366"
                    fill="#eaecf1"
                    fillOpacity="1"
                    strokeWidth="1.122"
                    d="M137.06 212.272h11.11v7.123h-11.11z"
                ></path>
                <path
                    id="path368"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M192.078 220.295v3.028h-7.022v-3.028z"
                ></path>
                <path
                    id="path370"
                    fill="#eaecf1"
                    fillOpacity="1"
                    strokeWidth="1.122"
                    d="M192.077 196.34v3.028h-7.02v-3.028z"
                ></path>
                <path
                    id="path372"
                    fill="#eaecf1"
                    fillOpacity="1"
                    strokeWidth="1.122"
                    d="M89.071 231.798l11.578-.002-.435 7.715H89.103z"
                ></path>
                <path
                    id="path316"
                    fill="#f3f5f4"
                    fillOpacity="1"
                    strokeWidth="1.122"
                    d="M364.919 336.076h6.99v10.97h-6.99z"
                ></path>
                <path
                    id="path386"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M376.908 336.076h6.99v10.97h-6.99z"
                ></path>
                <path
                    id="path870"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M376.908 352.045h6.99v10.97h-6.99z"
                ></path>
                <path
                    id="path872"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M364.919 352.045h6.99v10.97h-6.99z"
                ></path>
                <path
                    id="path376"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M364.778 407.866h6.99v10.97h-6.99z"
                ></path>
                <path
                    id="path378"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M376.908 391.969h6.99v10.97h-6.99z"
                ></path>
                <path
                    id="path380"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M376.908 407.938h6.99v10.97h-6.99z"
                ></path>
                <path
                    id="path382"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M364.853 392.027h6.99v10.97h-6.99z"
                ></path>
                <path
                    id="path14"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M536.365 303.798v7.896h3.71v-7.896z"
                ></path>
                <path
                    id="path414"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M456.437 255.889v7.894h3.709v-7.894z"
                ></path>
                <path
                    id="path416"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M528.373 255.889v7.894h3.709v-7.894z"
                ></path>
                <path
                    id="path418"
                    fill="#f3f5f4"
                    fillOpacity="1"
                    strokeWidth="1.122"
                    d="M512.243 255.889v7.894h3.71v-7.894z"
                ></path>
                <path
                    id="path420"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M512.243 271.859v7.895h3.71v-7.895z"
                ></path>
                <path
                    id="path422"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M504.394 271.859v7.895h3.709v-7.895z"
                ></path>
                <path
                    id="path424"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M480.416 271.859v7.895h3.709v-7.895z"
                ></path>
                <path
                    id="path426"
                    fill="#f3f5f4"
                    fillOpacity="1"
                    strokeWidth="1.122"
                    d="M456.437 271.859v7.895h3.709v-7.895z"
                ></path>
                <path
                    id="path428"
                    fill="#f3f5f4"
                    fillOpacity="1"
                    strokeWidth="1.122"
                    d="M464.43 271.859v7.895h3.708v-7.895z"
                ></path>
                <path
                    id="path430"
                    fill="#f3f5f4"
                    fillOpacity="1"
                    strokeWidth="1.122"
                    d="M488.408 271.859v7.895h3.71v-7.895z"
                ></path>
                <path
                    id="path432"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M528.373 271.859v7.895h3.709v-7.895z"
                ></path>
                <path
                    id="path434"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M536.365 271.859v7.895h3.71v-7.895z"
                ></path>
                <path
                    id="path436"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M536.365 255.889v7.894h3.71v-7.894z"
                ></path>
                <path
                    id="path438"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M536.365 287.829v7.895h3.71v-7.895z"
                ></path>
                <path
                    id="path440"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M528.373 287.829v7.895h3.709v-7.895z"
                ></path>
                <path
                    id="path442"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M528.373 303.798v7.895h3.709v-7.895z"
                ></path>
                <path
                    id="path444"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M504.568 287.83v7.894h3.709v-7.895z"
                ></path>
                <path
                    id="path446"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M488.408 287.828v7.896h3.71v-7.896z"
                ></path>
                <path
                    id="path448"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M480.416 287.828v7.896h3.709v-7.896z"
                ></path>
                <path
                    id="path450"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M464.43 287.828v7.896h3.708v-7.896z"
                ></path>
                <path
                    id="path452"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M456.437 287.828v7.896h3.709v-7.896z"
                ></path>
                <path
                    id="path454"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M536.365 303.798v7.896h3.71v-7.896z"
                ></path>
                <path
                    id="path894"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M464.43 255.889v7.894h3.708v-7.894z"
                ></path>
                <path
                    id="path896"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M480.416 255.889v7.896h3.709v-7.896z"
                ></path>
                <path
                    id="path898"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M504.394 255.889v7.896h3.709v-7.896z"
                ></path>
                <path
                    id="path900"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M488.408 255.889v7.896h3.71v-7.896z"
                ></path>
                <path
                    id="path552"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M1015.824 267.728h3.933v7.86h-3.933z"
                ></path>
                <path
                    id="path554"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M1015.823 219.82h3.935v7.859h-3.935z"
                ></path>
                <path
                    id="path556"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M1007.83 219.82h3.935v7.859h-3.935z"
                ></path>
                <path
                    id="path558"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M1023.816 219.82h3.935v7.86h-3.935z"
                ></path>
                <path
                    id="path560"
                    fill="#eaecf1"
                    fillOpacity="1"
                    strokeWidth="1.122"
                    d="M1023.817 283.697h3.933v7.86h-3.933z"
                ></path>
                <path
                    id="path562"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M1015.823 283.697h3.935v7.86h-3.935z"
                ></path>
                <path
                    id="path612"
                    fill="#eaecf1"
                    fillOpacity="1"
                    strokeWidth="1.122"
                    d="M1007.83 283.697h3.935v7.86h-3.935z"
                ></path>
                <path
                    id="path614"
                    fill="#eaecf1"
                    fillOpacity="1"
                    strokeWidth="1.122"
                    d="M1015.823 235.789h3.935v7.86h-3.935z"
                ></path>
                <path
                    id="path616"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M1015.824 251.758h3.933v7.86h-3.933z"
                ></path>
                <path
                    id="path618"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M1023.817 299.667h3.933v7.86h-3.933z"
                ></path>
                <path
                    id="path620"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M1007.83 203.849h3.935v7.86h-3.935z"
                ></path>
                <path
                    id="path622"
                    fill="#eaecf1"
                    fillOpacity="1"
                    strokeWidth="1.122"
                    d="M1023.816 203.849h3.935v7.86h-3.935z"
                ></path>
                <path
                    id="path624"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M1015.823 203.849h3.935v7.86h-3.935z"
                ></path>
                <path
                    id="path626"
                    fill="#f3f5f4"
                    fillOpacity="1"
                    strokeWidth="1.122"
                    d="M1007.83 251.758h3.935v7.86h-3.935z"
                ></path>
                <path
                    id="path628"
                    fill="#f3f5f4"
                    fillOpacity="1"
                    strokeWidth="1.122"
                    d="M1007.83 235.789h3.935v7.86h-3.935z"
                ></path>
                <path
                    id="path630"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M1023.817 235.789h3.933v7.86h-3.933z"
                ></path>
                <path
                    id="path632"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M1023.817 251.758h3.933v7.86h-3.933z"
                ></path>
                <path
                    id="path634"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M1023.816 267.728h3.935v7.86h-3.935z"
                ></path>
                <path
                    id="path672"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M1015.823 299.667h3.935v7.86h-3.935z"
                ></path>
                <path
                    id="path674"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M1007.83 267.728h3.935v7.86h-3.935z"
                ></path>
                <path
                    id="path882"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M1035.805 203.85v7.859h3.933v-7.86zm0 15.97v7.86h3.933v-7.861zm0 15.969v7.86h3.933v-7.86zm0 15.97v7.86h3.933v-7.86zm0 15.969v7.86h3.933v-7.86zm0 15.97v7.86h3.933v-7.86zm0 15.97v7.86h3.933v-7.86z"
                ></path>
                <path
                    id="path510"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M839.732 211.709h3.997v3.868h-3.997z"
                ></path>
                <path
                    id="path512"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M847.725 211.709h3.996v3.868h-3.996z"
                ></path>
                <path
                    id="path514"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M847.725 219.694h3.996v3.868h-3.996z"
                ></path>
                <path
                    id="path516"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M839.732 219.694h3.997v3.868h-3.997z"
                ></path>
                <path
                    id="path518"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M839.732 227.68h3.997v3.866h-3.997z"
                ></path>
                <path
                    id="path520"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M847.725 227.68h3.996v3.866h-3.996z"
                ></path>
                <path
                    id="path522"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M847.725 235.664h3.996v3.867h-3.996z"
                ></path>
                <path
                    id="path524"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M839.732 235.664h3.997v3.867h-3.997z"
                ></path>

                <path
                    id="path280"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M292.006 204.263v3.12h-7.022v-3.12z"
                ></path>
                <path
                    id="path282"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M303.995 204.263v3.12h-7.021v-3.12z"
                ></path>
                <path
                    id="path374"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M303.995 212.248v3.121h-7.021v-3.12z"
                ></path>
                <path
                    id="path1264"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M768.227 408.201v4.357h4.24V408.2z"
                ></path>
                <path
                    id="path1272"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M768.227 408.201v4.357h4.24V408.2z"
                ></path>
                <path
                    id="path9354"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M592.269 447.254h7.867v7.797h-7.867z"
                ></path>
                <path
                    id="path9356"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M731.948 419.104h8.123v4.058h-8.123z"
                ></path>
                <path
                    id="path9358"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M731.948 412.37h8.123v4.058h-8.123z"
                ></path>
                <path
                    id="path9360"
                    fill="#fff"
                    strokeWidth="1.122"
                    d="M756.281 419.104h8.124v4.058h-8.124z"
                ></path>
                <path
                    id="path9364"
                    fill="#eaecf1"
                    strokeWidth="1.122"
                    d="M512.243 287.83v7.894h3.71v-7.895z"
                ></path>
                <path
                    id="path9366"
                    fill="#f3f5f4"
                    strokeWidth="1.122"
                    d="M388.897 304.135h6.99v10.97h-6.99z"
                ></path>
                <path
                    id="path9368"
                    fill="#f3f5f4"
                    fillOpacity="1"
                    strokeWidth="1.122"
                    d="M388.897 320.105h6.99v10.97h-6.99z"
                ></path>
            </g>
            <g
                id="g424"
                fill="#ff8585"
                fillOpacity="1"
                transform="matrix(1.12224 0 0 1.12224 0 -57.574)"
            >
                <g id="g424-sg-1" >
                    <path id="path68" d="M10.634 178.641h4.463v4.46h-4.463z"></path>
                    <path
                        id="path68-3"
                        d="M32.426 164.327h4.463v4.459h-4.463z"
                        display="inline"
                        opacity="1"
                    ></path>
                    <path
                        id="path68-6"
                        d="M61.028 164.327h4.463v4.459h-4.463z"
                        display="inline"
                        opacity="1"
                    ></path>
                    <path
                        id="path68-7"
                        d="M129.795 164.327h4.463v4.459h-4.463z"
                        display="inline"
                        opacity="1"
                    ></path>
                    <path
                        id="path68-5"
                        d="M196.503 157.471h4.464v4.46h-4.464z"
                        display="inline"
                        opacity="1"
                    ></path>
                </g>
                <path
                    id="path2581"
                    d="M216.503 157.471h4.464v4.46h-4.464z"
                    display="inline"
                    opacity="1"
                ></path>
                <path
                    id="path68-35"
                    d="M239.388 182.243h4.463v4.459h-4.463z"
                    display="inline"
                    opacity="1"
                ></path>
                <path
                    id="path2589"
                    d="M271.388 182.243h4.463v4.459h-4.463z"
                    display="inline"
                    opacity="1"
                ></path>
                <path
                    id="path68-62"
                    d="M281.206 224.94h4.463v4.459h-4.463z"
                    display="inline"
                    opacity="1"
                ></path>
                <path
                    id="path68-9"
                    d="M309.93 224.94h4.464v4.459h-4.463z"
                    display="inline"
                    opacity="1"
                ></path>
                <path
                    id="path68-1"
                    d="M352.535 224.94h4.463v4.459h-4.463z"
                    display="inline"
                    opacity="1"
                ></path>
                <path
                    id="path68-2"
                    d="M402.837 271.178h4.464v4.46h-4.464z"
                    display="inline"
                    opacity="1"
                ></path>
                <path
                    id="path68-70"
                    d="M481.813 270.734h4.463v4.46h-4.463z"
                    display="inline"
                    opacity="1"
                ></path>
                <path
                    id="path68-93"
                    d="M758.454 231.832h4.463v4.46h-4.463z"
                    display="inline"
                    opacity="1"
                ></path>
                <path
                    id="path68-60"
                    d="M744.443 231.836h4.463v4.46h-4.463z"
                    display="inline"
                    opacity="1"
                ></path>
                <path
                    id="path68-626"
                    d="M801.187 258.518h4.463v4.46h-4.463z"
                    display="inline"
                    opacity="1"
                ></path>
                <path
                    id="path68-18"
                    d="M804.493 229.534h4.463v4.459h-4.463z"
                    display="inline"
                    opacity="1"
                ></path>
                <path
                    id="path68-79"
                    d="M819.501 229.692h4.464v4.459H819.5z"
                    display="inline"
                    opacity="1"
                ></path>
                <path
                    id="path68-20"
                    d="M798.437 182.713h4.463v4.46h-4.463z"
                    display="inline"
                    opacity="1"
                ></path>
                <path
                    id="path68-23"
                    d="M826.583 182.713h4.464v4.46h-4.464z"
                    display="inline"
                    opacity="1"
                ></path>
                <path
                    id="path68-75"
                    d="M816.038 175.23h4.464v4.458h-4.464z"
                    display="inline"
                    opacity="1"
                ></path>
                <path
                    id="path68-92"
                    d="M808.112 175.39h4.464v4.458h-4.464z"
                    display="inline"
                    opacity="1"
                ></path>
                <path
                    id="path68-28"
                    d="M812.075 146.565h4.464v4.459h-4.464z"
                    display="inline"
                    opacity="1"
                ></path>
                <path
                    id="path68-97"
                    d="M865.41 247.688h4.463v4.46h-4.463z"
                    display="inline"
                    opacity="1"
                ></path>
                <path
                    id="path68-36"
                    d="M882.68 247.688h4.464v4.46h-4.463z"
                    display="inline"
                    opacity="1"
                ></path>
                <path
                    id="path68-12"
                    d="M914.89 224.819h4.463v4.459h-4.463z"
                    display="inline"
                    opacity="1"
                ></path>
                <path
                    id="path68-931"
                    d="M896.768 224.77h4.464v4.46h-4.464z"
                    display="inline"
                    opacity="1"
                ></path>
                <path
                    id="path68-94"
                    d="M987.064 253.422h4.463v4.46h-4.463z"
                    display="inline"
                    opacity="1"
                ></path>
                <path
                    id="path68-78"
                    d="M1086.966 253.422h4.463v4.46h-4.463z"
                    display="inline"
                    opacity="1"
                ></path>
                <path
                    id="path68-4"
                    d="M1114.265 207.141h4.463v4.46h-4.463z"
                    display="inline"
                    opacity="1"
                ></path>
                <path
                    id="path68-50"
                    d="M1073.818 207.141h4.463v4.46h-4.463z"
                    display="inline"
                    opacity="1"
                ></path>
            </g>
        </Group>

    )
}
export default Layer1