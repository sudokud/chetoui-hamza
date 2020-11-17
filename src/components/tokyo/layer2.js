import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'


const Group = styled.g`
#path908{
    fill:${props => props.isDark ? "#1c1124" : "#c9c6ca"};
}
`

const Layer2 = ({ isDark }) => {
    return (
        <Group isDark={isDark} id="layer2" display="inline" transform="translate(0 -31.23)">
            <path
                id="path908"
                fillOpacity="1"
                strokeWidth="1.122"
                d="M256.518 203.499v12.099h-36.4v29.446l-.112 100.16-167.337.34-.01-118.123H12.523v-7.983L.51 219.44.506 470.943l219.362.004 147.377-.063s96.017-.007 152.48-.007h64.324l375.95.041v.024l215.446-.002 103.908.002.011-259.516h-19.83v4.015h-32.063v7.983h-3.917v207.752l-48.11.69V307.553h-55.763v-8.235h-23.856v-8.108h-8.18v8.108h-4.058v-15.97h-7.93v15.97h-15.86v7.963h-44.176v-11.867h-23.843v11.823h-3.974v-11.908h-8.037v12.005H959.82l.147 136.29-56.585-.282V259.598h-4.064v-11.933h-43.774v-4.241h-15.486v4.35h-31.874v12h-11.838v159.69h-4.822V401.82h-7.773v3.53h3.974v14.115h-12.187V401.82h-7.772v3.53h3.974v14.115h-7.49v11.851H744.27v3.37h4.12v4.74h-3.995v7.985h-8.868v-32.065H616.199V466.862l-32.15.134h-4.5v-7.928h-15.492v-8.101h3.995v-3.992h-7.93v12.093h-7.873v-.002h-4.182v-8.029h3.996v-4.073h-7.93v12.102h-24.407v-11.847h-4.816v-8.297l4.772.092.04-7.737-3.576-.004h-.175V414.69l3.755.015-.004-26.552V359.7h-4.246v-16.967h4.246v-7.236h-4.246v-16.717h4.246v-7.238h-4.246v-12.976h3.996v-6.985H380.598v9.607l-.188 86.96V427.136l-12.85-.028.658-91.86H364.3v-12.007h-39.9V215.475h-28.006v-8.015h-3.935v8.015H288.4v-8.015h-3.965v8.048h-4.027v-12.01zm975.06 15.97h3.94v3.866h-3.94zm7.99 0h3.939v3.866h-3.939zm7.992 0h3.939v3.866h-3.94zm8 0h3.928v3.866h-3.928zM13.158 231.925h3.031v7.014h-3.031zm7.991 0h3.032v7.014h-3.032zm7.994 0h3.032v7.014h-3.032zm7.992 0h3.031v7.014h-3.031zm7.994 0h3.031v7.014h-3.031zm766.764 19.423h4.063v8.028h-4.063zm7.993 0h4.062v8.028h-4.062zm7.992 0h4.064v8.028h-4.064zm7.994 0h4.061v8.028h-4.061zm23.977 0h4.064v8.028h-4.064zm7.994 0h4.063v8.028h-4.063zm7.993 0h4.062v8.028h-4.062zm7.992 0h4.064v8.028h-4.064zm7.994 0h4.061v8.028h-4.061zm-19.984 15.97h4.064v8.026h-4.064zm-67.893.129h7.77v7.588h-7.77zm11.99 0h7.77v7.588h-7.77zm15.985 0h7.77v7.588h-7.77zm11.99 0h7.77v7.588h-7.77zm27.928 11.847h4.064v8.029h-4.064zm0 11.979h4.064v8.026h-4.064zm-67.893.129h7.77v7.588h-7.77zm11.99 0h7.77v7.588h-7.77zm15.985 0h7.77v7.588h-7.77zm11.99 0h7.77v7.588h-7.77zm27.928 11.847h4.064v8.029h-4.064zm191.727.05h3.752v3.882h-3.752zm7.993 0h3.753v3.882h-3.753zm11.99 0h3.752v3.882h-3.752zm11.99 0h3.752v3.882h-3.753zm7.991 0h3.753v3.882h-3.753zm7.994 0h3.752v3.882h-3.752zm-239.685 11.927h4.064v8.028h-4.064zm-67.893.131h7.77v7.586h-7.77zm11.99 0h7.77v7.586h-7.77zm15.985 0h7.77v7.586h-7.77zm11.99 0h7.77v7.586h-7.77zm27.928 11.847h4.064v8.027h-4.064zm-547.317.123h3.873v7.86h-3.873zm7.994 0h3.87v7.86h-3.87zm7.992 0h3.873v7.86h-3.873zm7.993 0h3.871v7.86h-3.87zm7.992 0h3.873v7.86h-3.873zm515.346 11.854h4.064v8.029h-4.064zm-67.893.131h7.77v7.586h-7.77zm11.99 0h7.77v7.586h-7.77zm15.985 0h7.77v7.586h-7.77zm11.99 0h7.77v7.586h-7.77zm27.928 11.847h4.064v8.027h-4.064zm-67.893 12.108h7.77v7.586h-7.77zm11.99 0h7.77v7.586h-7.77zm15.985 0h7.77v7.586h-7.77zm11.99 0h7.77v7.586h-7.77zm-40.07 47.713h16.046v4.117H803.84zm4.059 8.047h8.055v12.042H807.9zm-39.984 3.954h4.063v8.029h-4.063zm7.994 0h4.061v8.029h-4.061zm7.991 0h4.064v8.029H783.9zm7.994 0h4.061v8.029h-4.061zm-272.168 39.796h24.115v4.212h-24.115zm28.255.06h3.652v4.152h-3.652zm7.554.13h4.059v3.992h-4.06zm7.993 0h4.06v3.992h-4.06zm7.992 0h4.06v3.992h-4.06z"
                display="inline"
            ></path>
            <path
                id="path932"
                fill="#eaecf1"
                strokeWidth="1.122"
                d="M239.987 230.955h-3.032v-7.015h3.032z"
                display="inline"
            ></path>
            <path
                id="path934"
                fill="#eaecf1"
                strokeWidth="1.122"
                d="M231.994 230.955h-3.031v-7.015h3.031z"
                display="inline"
            ></path>
            <path
                id="path1258"
                fill="#eaecf1"
                strokeWidth="1.122"
                d="M228.926 239.87h11.111v7.123h-11.111z"
                display="inline"
            ></path>
            <g
                id="g2785"
                fill="#ff6969"
                fillOpacity="1"
                transform="matrix(1.12224 0 0 1.12224 0 -57.574)"
            >
                <path
                    id="path930"
                    d="M200 239.661h7.251v3.758h-7.25z"
                    display="inline"
                ></path>
                <path
                    id="path1018"
                    d="M.637 264.207h6.68v-2.642H.638z"
                    display="inline"
                ></path>
                <path
                    id="path1020"
                    d="M217.806 239.661h7.25v3.758h-7.25z"
                    display="inline"
                ></path>
                <path
                    id="path1230"
                    d="M563.263 417.627h7.067v3.78h-7.067z"
                    display="inline"
                ></path>
                <path
                    id="path1232"
                    d="M645.166 417.627h7.067v3.78h-7.067z"
                    display="inline"
                ></path>
                <path
                    id="path1236"
                    d="M341.872 308.127h6.61v2.988h-6.61z"
                    display="inline"
                ></path>
                <path
                    id="path1240"
                    d="M1011.696 321.573h7.22v3.78h-7.22z"
                    display="inline"
                ></path>
                <path
                    id="path1242"
                    d="M1040.176 321.573h7.23v3.78h-7.23z"
                    display="inline"
                ></path>
                <path
                    id="path1362-5"
                    d="M40.048 264.388h10.824v-3.114H40.048z"
                    display="inline"
                ></path>
                <path
                    id="path1560"
                    d="M371.27 308.135h6.61v2.988h-6.61z"
                    display="inline"
                ></path>
                <path
                    id="path1562"
                    d="M452.547 308.127h6.61v2.988h-6.61z"
                    display="inline"
                ></path>
            </g>
            <g
                id="g2795"
                fill="#fff"
                transform="matrix(1.12224 0 0 1.12224 0 -57.574)"
            >
                <path
                    id="path504"
                    d="M495.704 450.068h7.011v6.948h-7.01z"
                    display="inline"
                    opacity="1"
                ></path>
                <path
                    id="path1100-1"
                    d="M502.614 453.147v3.64h3.557v-3.64z"
                    display="inline"
                ></path>
                <path
                    id="path1096-7"
                    d="M488.371 453.138v3.639h3.557v-3.64z"
                    display="inline"
                ></path>
                <path
                    id="path1274"
                    d="M698.38 412.498l-.016 3.881 3.535-.01.022-3.87z"
                    display="inline"
                ></path>
                <path
                    id="path10688"
                    d="M684.135 412.498l-.002 3.916 3.543-.034v-3.882z"
                    display="inline"
                ></path>
            </g>
            <g
                id="windows-lights"
                transform="matrix(1.12224 0 0 1.12224 0 -57.574)"
            >
                <path
                    id="path936"
                    fill="#eaecf1"
                    d="M221.794 250.813h9.901v6.347h-9.9z"
                    display="inline"
                ></path>
                <path
                    id="path938"
                    fill="#eaecf1"
                    d="M236.04 250.813h9.9v6.347h-9.9z"
                    display="inline"
                ></path>
                <path
                    id="path940"
                    fill="#eaecf1"
                    d="M236.04 265.043h9.9v6.348h-9.9z"
                    display="inline"
                ></path>
                <path
                    id="path942"
                    fill="#eaecf1"
                    d="M221.794 265.043h9.901v6.348h-9.9z"
                    display="inline"
                ></path>
                <path
                    id="path944"
                    fill="#eaecf1"
                    d="M257.405 265.043h9.901v6.348h-9.9z"
                    display="inline"
                ></path>
                <path
                    id="path946"
                    fill="#eaecf1"
                    d="M257.405 250.813h9.901v6.347h-9.9z"
                    display="inline"
                ></path>
                <path
                    id="path948"
                    fill="#eaecf1"
                    d="M257.405 307.734h9.901v6.347h-9.9z"
                    display="inline"
                ></path>
                <path
                    id="path950"
                    fill="#eaecf1"
                    d="M271.65 307.734h9.9v6.347h-9.9z"
                    display="inline"
                ></path>
                <path
                    id="path952"
                    fill="#eaecf1"
                    d="M271.65 293.504h9.9v6.347h-9.9z"
                    display="inline"
                ></path>
                <path
                    id="path954"
                    fill="#eaecf1"
                    d="M257.405 293.504h9.901v6.347h-9.9z"
                    display="inline"
                ></path>
                <path
                    id="path956"
                    fill="#eaecf1"
                    d="M257.405 279.274h9.901v6.347h-9.9z"
                    display="inline"
                ></path>
                <path
                    id="path958"
                    fill="#eaecf1"
                    d="M271.65 279.274h9.9v6.347h-9.9z"
                    display="inline"
                ></path>
                <path
                    id="path960"
                    fill="#eaecf1"
                    d="M271.65 265.043h9.9v6.348h-9.9z"
                    display="inline"
                ></path>
                <path
                    id="path962"
                    fill="#eaecf1"
                    d="M271.65 250.813h9.9v6.347h-9.9z"
                    display="inline"
                ></path>
                <path
                    id="path964"
                    fill="#eaecf1"
                    d="M236.04 279.274h9.9v6.347h-9.9z"
                    display="inline"
                ></path>
                <path
                    id="path966"
                    fill="#eaecf1"
                    d="M236.04 293.504h9.9v6.347h-9.9z"
                    display="inline"
                ></path>
                <path
                    id="path968"
                    fill="#eaecf1"
                    d="M236.04 307.734h9.9v6.347h-9.9z"
                    display="inline"
                ></path>
                <path
                    id="path970"
                    fill="#eaecf1"
                    d="M236.04 321.964h9.9v6.347h-9.9z"
                    display="inline"
                ></path>
                <path
                    id="path972"
                    fill="#eaecf1"
                    d="M271.65 321.964h9.9v6.347h-9.9z"
                    display="inline"
                ></path>
                <path
                    id="path974"
                    fill="#eaecf1"
                    d="M257.405 321.964h9.901v6.347h-9.9z"
                    display="inline"
                ></path>
                <path
                    id="path976"
                    fill="#dbdde5"
                    d="M257.405 336.194h9.901v6.348h-9.9z"
                    display="inline"
                ></path>
                <path
                    id="path978"
                    fill="#dbdde5"
                    d="M271.65 336.194h9.9v6.348h-9.9z"
                    display="inline"
                ></path>
                <path
                    id="path980"
                    fill="#dbdde5"
                    d="M236.04 336.194h9.9v6.348h-9.9z"
                    display="inline"
                ></path>
                <path
                    id="path982"
                    fill="#eaecf1"
                    d="M221.794 279.274h9.901v6.347h-9.9z"
                    display="inline"
                ></path>
                <path
                    id="path984"
                    fill="#eaecf1"
                    d="M223.845 307.664h7.934v6.348h-7.934z"
                    display="inline"
                ></path>
                <path
                    id="path986"
                    fill="#eaecf1"
                    d="M221.814 336.233h9.901v6.348h-9.9z"
                    display="inline"
                ></path>
                <path
                    id="path988"
                    fill="#eaecf1"
                    d="M221.086 321.964h10.61v6.347h-10.61z"
                    display="inline"
                ></path>
                <path
                    id="path990"
                    fill="#eaecf1"
                    d="M223.598 374.91l22.73-.028v7.171l-22.758-.056z"
                    display="inline"
                ></path>
                <path
                    id="path992"
                    fill="#eaecf1"
                    d="M356.721 403.397h3.561v7.171h-3.56z"
                    display="inline"
                ></path>
                <path
                    id="path994"
                    fill="#eaecf1"
                    d="M349.6 403.397h3.56v7.171h-3.56z"
                    display="inline"
                ></path>
                <path
                    id="path996"
                    fill="#eaecf1"
                    d="M410.096 403.221h17.941v7.39h-17.94z"
                    display="inline"
                ></path>
                <path
                    id="path998"
                    fill="#fe9e41"
                    fillOpacity="1"
                    d="M8.166 272.206h13.438v6.318H8.166z"
                    display="inline"
                ></path>
                <path
                    id="path1000"
                    fill="#f3f5f4"
                    d="M8.166 286.436h13.438v6.318H8.166z"
                    display="inline"
                ></path>
                <path
                    id="path1002"
                    fill="#f3f5f4"
                    d="M8.166 300.666h13.438v6.318H8.166z"
                    display="inline"
                ></path>
                <path
                    id="path1004"
                    fill="#f3f5f4"
                    d="M29.532 314.896H42.97v6.32H29.532z"
                    display="inline"
                ></path>
                <path
                    id="path1006"
                    fill="#fe9e41"
                    fillOpacity="1"
                    d="M8.166 314.896h13.438v6.32H8.166z"
                    display="inline"
                ></path>
                <path
                    id="path1008"
                    fill="#fe9e41"
                    fillOpacity="1"
                    d="M29.532 300.666H42.97v6.318H29.532z"
                    display="inline"
                ></path>
                <path
                    id="path1010"
                    fill="#fe9e41"
                    fillOpacity="1"
                    d="M29.532 286.436H42.97v6.318H29.532z"
                    display="inline"
                ></path>
                <path
                    id="path1012"
                    fill="#f3f5f4"
                    d="M29.532 272.206H42.97v6.318H29.532z"
                    display="inline"
                ></path>
                <path
                    id="path1014"
                    fill="#fe9e41"
                    fillOpacity="1"
                    d="M8.166 329.127h13.438v6.318H8.166z"
                    display="inline"
                ></path>
                <path
                    id="path1016"
                    fill="#f3f5f4"
                    d="M29.532 329.127H42.97v6.318H29.532z"
                    display="inline"
                ></path>
                <path
                    id="path1024"
                    fill="#eaecf1"
                    d="M260.516 357.093h21.422v7.171h-21.422z"
                    display="inline"
                ></path>
                <path
                    id="path1026"
                    fill="#eaecf1"
                    d="M224.905 357.093h21.423v7.171h-21.423z"
                    display="inline"
                ></path>
                <path
                    id="path1028"
                    fill="#eaecf1"
                    d="M296.127 357.093h21.422v7.171h-21.422z"
                    display="inline"
                ></path>
                <path
                    id="path1030"
                    fill="#eaecf1"
                    d="M296.127 374.881h21.422v7.171h-21.422z"
                    display="inline"
                ></path>
                <path
                    id="path1032"
                    fill="#eaecf1"
                    d="M260.516 374.881h21.422v7.171h-21.422z"
                    display="inline"
                ></path>
                <path
                    id="path1044"
                    fill="#eaecf1"
                    d="M385.17 320.84h17.94v7.39h-17.94z"
                    display="inline"
                ></path>
                <path
                    id="path1046"
                    fill="#eaecf1"
                    d="M435.024 320.84h17.941v7.39h-17.94z"
                    display="inline"
                ></path>
                <path
                    id="path1048"
                    fill="#eaecf1"
                    d="M410.096 320.84h17.941v7.39h-17.94z"
                    display="inline"
                ></path>
                <path
                    id="path1050"
                    fill="#eaecf1"
                    d="M410.096 339.185h17.941v7.39h-17.94z"
                    display="inline"
                ></path>
                <path
                    id="path1052"
                    fill="#eaecf1"
                    d="M385.17 339.185h17.94v7.39h-17.94z"
                    display="inline"
                ></path>
                <path
                    id="path1054"
                    fill="#eaecf1"
                    d="M435.024 339.185h17.941v7.39h-17.94z"
                    display="inline"
                ></path>
                <path
                    id="path1056"
                    fill="#eaecf1"
                    d="M435.024 360.531h17.941v7.39h-17.94z"
                    display="inline"
                ></path>
                <path
                    id="path1058"
                    fill="#eaecf1"
                    d="M410.096 360.531h17.941v7.39h-17.94z"
                    display="inline"
                ></path>
                <path
                    id="path1060"
                    fill="#eaecf1"
                    d="M385.17 360.531h17.94v7.39h-17.94z"
                    display="inline"
                ></path>
                <path
                    id="path1062"
                    fill="#eaecf1"
                    d="M385.17 424.566h17.94v7.39h-17.94z"
                    display="inline"
                ></path>
                <path
                    id="path1064"
                    fill="#eaecf1"
                    d="M385.17 445.912h17.94v7.39h-17.94z"
                    display="inline"
                ></path>
                <path
                    id="path1066"
                    fill="#eaecf1"
                    d="M410.096 445.912h17.941v7.39h-17.94z"
                    display="inline"
                ></path>
                <path
                    id="path1068"
                    fill="#eaecf1"
                    d="M410.096 424.566h17.941v7.39h-17.94z"
                    display="inline"
                ></path>
                <path
                    id="path1070"
                    fill="#eaecf1"
                    d="M435.024 424.566h17.941v7.39h-17.94z"
                    display="inline"
                ></path>
                <path
                    id="path1072"
                    fill="#eaecf1"
                    d="M435.024 445.912h17.941v7.39h-17.94z"
                    display="inline"
                ></path>
                <path
                    id="path1074"
                    fill="#eaecf1"
                    d="M349.6 318.016h3.56v7.171h-3.56z"
                    display="inline"
                ></path>
                <path
                    id="path1076"
                    fill="#eaecf1"
                    d="M356.721 318.016h3.561v7.171h-3.56z"
                    display="inline"
                ></path>
                <path
                    id="path1078"
                    fill="#eaecf1"
                    d="M356.721 339.361h3.561v7.171h-3.56z"
                    display="inline"
                ></path>
                <path
                    id="path1080"
                    fill="#eaecf1"
                    d="M349.6 339.361h3.56v7.171h-3.56z"
                    display="inline"
                ></path>
                <path
                    id="path1082"
                    fill="#eaecf1"
                    d="M349.6 360.707h3.56v7.17h-3.56z"
                    display="inline"
                ></path>
                <path
                    id="path1084"
                    fill="#eaecf1"
                    d="M356.721 360.707h3.561v7.17h-3.56z"
                    display="inline"
                ></path>
                <path
                    id="path1086"
                    fill="#eaecf1"
                    d="M349.6 424.742h3.56v7.171h-3.56z"
                    display="inline"
                ></path>
                <path
                    id="path1088"
                    fill="#eaecf1"
                    d="M356.721 424.742h3.561v7.171h-3.56z"
                    display="inline"
                ></path>
                <path
                    id="path1110"
                    fill="#fff"
                    d="M552.462 424.673h7.24v3.616h-7.24z"
                    display="inline"
                ></path>
                <path
                    id="path1112"
                    fill="#fff"
                    d="M552.462 431.788h7.24v3.616h-7.24z"
                    display="inline"
                ></path>
                <path
                    id="path1114"
                    fill="#fff"
                    d="M552.462 438.903h7.24v3.616h-7.24z"
                    display="inline"
                ></path>
                <path
                    id="path1116"
                    fill="#fff"
                    d="M552.462 446.018h7.24v3.616h-7.24z"
                    display="inline"
                ></path>
                <path
                    id="path1118"
                    fill="#fff"
                    d="M563.145 446.018h7.24v3.616h-7.24z"
                    display="inline"
                ></path>
                <path
                    id="path1120"
                    fill="#fff"
                    d="M563.145 438.903h7.24v3.616h-7.24z"
                    display="inline"
                ></path>
                <path
                    id="path1122"
                    fill="#fff"
                    d="M563.145 431.788h7.24v3.616h-7.24z"
                    display="inline"
                ></path>
                <path
                    id="path1124"
                    fill="#fff"
                    d="M563.145 424.673h7.24v3.616h-7.24z"
                    display="inline"
                ></path>
                <path
                    id="path1126"
                    fill="#fff"
                    d="M573.83 424.673h7.238v3.616h-7.239z"
                    display="inline"
                ></path>
                <path
                    id="path1128"
                    fill="#fff"
                    d="M573.83 431.788h7.238v3.616h-7.239z"
                    display="inline"
                ></path>
                <path
                    id="path1130"
                    fill="#fff"
                    d="M573.83 438.903h7.238v3.616h-7.239z"
                    display="inline"
                ></path>
                <path
                    id="path1132"
                    fill="#fff"
                    d="M573.83 446.018h7.238v3.616h-7.239z"
                    display="inline"
                ></path>
                <path
                    id="path1134"
                    fill="#fff"
                    d="M595.195 446.018h7.24v3.616h-7.24z"
                    display="inline"
                ></path>
                <path
                    id="path1136"
                    fill="#fff"
                    d="M595.195 438.903h7.24v3.616h-7.24z"
                    display="inline"
                ></path>
                <path
                    id="path1138"
                    fill="#fff"
                    d="M595.195 431.788h7.24v3.616h-7.24z"
                    display="inline"
                ></path>
                <path
                    id="path1140"
                    fill="#fff"
                    d="M595.195 424.673h7.24v3.616h-7.24z"
                    display="inline"
                ></path>
                <path
                    id="path1142"
                    fill="#fff"
                    d="M605.878 424.673h7.24v3.616h-7.24z"
                    display="inline"
                ></path>
                <path
                    id="path1144"
                    fill="#fff"
                    d="M605.878 431.788h7.24v3.616h-7.24z"
                    display="inline"
                ></path>
                <path
                    id="path1146"
                    fill="#fff"
                    d="M605.878 438.903h7.24v3.616h-7.24z"
                    display="inline"
                ></path>
                <path
                    id="path1148"
                    fill="#fff"
                    d="M605.878 446.018h7.24v3.616h-7.24z"
                    display="inline"
                ></path>
                <path
                    id="path1150"
                    fill="#fff"
                    d="M616.562 446.018h7.24v3.616h-7.24z"
                    display="inline"
                ></path>
                <path
                    id="path1152"
                    fill="#fff"
                    d="M616.562 438.903h7.24v3.616h-7.24z"
                    display="inline"
                ></path>
                <path
                    id="path1154"
                    fill="#fff"
                    d="M616.562 431.788h7.24v3.616h-7.24z"
                    display="inline"
                ></path>
                <path
                    id="path1156"
                    fill="#fff"
                    d="M616.562 424.673h7.24v3.616h-7.24z"
                    display="inline"
                ></path>
                <path
                    id="path1158"
                    fill="#eaecf1"
                    d="M880.11 374.761h14.281v7.39H880.11z"
                    display="inline"
                ></path>
                <path
                    id="path1160"
                    fill="#eaecf1"
                    d="M862.304 374.761h14.282v7.39h-14.282z"
                    display="inline"
                ></path>
                <path
                    id="path1162"
                    fill="#eaecf1"
                    d="M908.598 374.761h14.282v7.39h-14.282z"
                    display="inline"
                ></path>
                <path
                    id="path1164"
                    fill="#eaecf1"
                    d="M926.403 374.761h14.282v7.39h-14.282z"
                    display="inline"
                ></path>
                <path
                    id="path1174"
                    fill="#fff"
                    d="M1097.255 257.482h7.35v10.728h-7.35z"
                    display="inline"
                ></path>
                <path
                    id="path1176"
                    fill="#fff"
                    d="M1111.505 257.482h7.34v10.728h-7.34z"
                    display="inline"
                ></path>
                <path
                    id="path1178"
                    fill="#fff"
                    d="M1125.745 257.482h7.35v10.728h-7.35z"
                    display="inline"
                ></path>
                <path
                    id="path1180"
                    fill="#fff"
                    d="M1125.745 275.27h7.35v10.728h-7.35z"
                    display="inline"
                ></path>
                <path
                    id="path1182"
                    fill="#fff"
                    d="M1111.505 275.27h7.34v10.728h-7.34z"
                    display="inline"
                ></path>
                <path
                    id="path1184"
                    fill="#fff"
                    d="M1097.255 275.27h7.35v10.728h-7.35z"
                    display="inline"
                ></path>
                <path
                    id="path1186"
                    fill="#fff"
                    d="M1097.255 293.058h7.35v10.728h-7.35z"
                    display="inline"
                ></path>
                <path
                    id="path1188"
                    fill="#fff"
                    d="M1097.255 310.845h7.35v10.73h-7.35z"
                    display="inline"
                ></path>
                <path
                    id="path1190"
                    fill="#fff"
                    d="M1111.505 310.845h7.34v10.73h-7.34z"
                    display="inline"
                ></path>
                <path
                    id="path1192"
                    fill="#fff"
                    d="M1111.505 293.058h7.34v10.728h-7.34z"
                    display="inline"
                ></path>
                <path
                    id="path1194"
                    fill="#fff"
                    d="M1125.745 293.058h7.35v10.728h-7.35z"
                    display="inline"
                ></path>
                <path
                    id="path1196"
                    fill="#fff"
                    d="M1125.745 310.845h7.35v10.73h-7.35z"
                    display="inline"
                ></path>
                <path
                    id="path1198"
                    fill="#fff"
                    d="M1125.745 328.633h7.35v10.728h-7.35z"
                    display="inline"
                ></path>
                <path
                    id="path1200"
                    fill="#fff"
                    d="M1125.745 346.421h7.35v10.728h-7.35z"
                    display="inline"
                ></path>
                <path
                    id="path1202"
                    fill="#fff"
                    d="M1125.745 364.208h7.35v10.73h-7.35z"
                    display="inline"
                ></path>
                <path
                    id="path1204"
                    fill="#fff"
                    d="M1111.505 328.633h7.34v10.728h-7.34z"
                    display="inline"
                ></path>
                <path
                    id="path1206"
                    fill="#eaecf1"
                    d="M862.304 332.07h14.282v7.39h-14.282z"
                    display="inline"
                ></path>
                <path
                    id="path1208"
                    fill="#eaecf1"
                    d="M862.304 346.3h14.282v7.39h-14.282z"
                    display="inline"
                ></path>
                <path
                    id="path1210"
                    fill="#eaecf1"
                    d="M862.304 360.531h14.282v7.39h-14.282z"
                    display="inline"
                ></path>
                <path
                    id="path1212"
                    fill="#eaecf1"
                    d="M880.11 360.531h14.281v7.39H880.11z"
                    display="inline"
                ></path>
                <path
                    id="path1214"
                    fill="#eaecf1"
                    d="M880.11 346.3h14.281v7.39H880.11z"
                    display="inline"
                ></path>
                <path
                    id="path1216"
                    fill="#eaecf1"
                    d="M880.11 332.07h14.281v7.39H880.11z"
                    display="inline"
                ></path>
                <path
                    id="path1218"
                    fill="#eaecf1"
                    d="M908.598 332.07h14.282v7.39h-14.282z"
                    display="inline"
                ></path>
                <path
                    id="path1220"
                    fill="#eaecf1"
                    d="M926.403 332.07h14.282v7.39h-14.282z"
                    display="inline"
                ></path>
                <path
                    id="path1222"
                    fill="#eaecf1"
                    d="M908.598 346.3h14.282v7.39h-14.282z"
                    display="inline"
                ></path>
                <path
                    id="path1224"
                    fill="#eaecf1"
                    d="M926.403 346.3h14.282v7.39h-14.282z"
                    display="inline"
                ></path>
                <path
                    id="path1226"
                    fill="#eaecf1"
                    d="M926.403 360.531h14.282v7.39h-14.282z"
                    display="inline"
                ></path>
                <path
                    id="path1228"
                    fill="#eaecf1"
                    d="M908.598 360.531h14.282v7.39h-14.282z"
                    display="inline"
                ></path>
                <path
                    id="path1256"
                    fill="#eaecf1"
                    d="M221.51 293.504h10.471v6.347H221.51z"
                    display="inline"
                ></path>
                <path
                    id="path1276"
                    fill="#eaecf1"
                    d="M385.17 403.221h17.94v7.39h-17.94z"
                    display="inline"
                ></path>
                <path
                    id="path1278"
                    fill="#eaecf1"
                    d="M349.6 446.088h3.56v7.17h-3.56z"
                    display="inline"
                ></path>
                <path
                    id="path1280"
                    fill="#eaecf1"
                    d="M356.721 446.088h3.561v7.17h-3.56z"
                    display="inline"
                ></path>
                <path
                    id="path1516"
                    fill="#fff"
                    d="M1112.225 346.686h6.46v10.06h-6.46z"
                    display="inline"
                ></path>
                <path
                    id="path1950"
                    fill="#eaecf1"
                    fillOpacity="1"
                    d="M751.984 375h6.924v6.76h-6.924z"
                    display="inline"
                ></path>
                <path
                    id="path1948"
                    fill="#eaecf1"
                    fillOpacity="1"
                    d="M741.3 375h6.925v6.76H741.3z"
                    display="inline"
                ></path>
                <path
                    id="path1946"
                    fill="#eaecf1"
                    fillOpacity="1"
                    d="M727.057 375h6.923v6.76h-6.923z"
                    display="inline"
                ></path>
                <path
                    id="path1944"
                    fill="#eaecf1"
                    fillOpacity="1"
                    d="M716.373 375h6.924v6.76h-6.924z"
                    display="inline"
                ></path>
                <path
                    id="path1942"
                    fill="#eaecf1"
                    fillOpacity="1"
                    d="M776.871 364.21h3.621v7.153h-3.62z"
                    display="inline"
                ></path>
                <path
                    id="path1940"
                    fill="#eaecf1"
                    fillOpacity="1"
                    d="M751.984 353.654h6.924v6.76h-6.924z"
                    display="inline"
                ></path>
                <path
                    id="path1938"
                    fill="#eaecf1"
                    fillOpacity="1"
                    d="M741.3 353.654h6.925v6.76H741.3z"
                    display="inline"
                ></path>
                <path
                    id="path1936"
                    fill="#eaecf1"
                    fillOpacity="1"
                    d="M727.057 353.654h6.923v6.76h-6.923z"
                    display="inline"
                ></path>
                <path
                    id="path1934"
                    fill="#eaecf1"
                    fillOpacity="1"
                    d="M716.373 353.654h6.924v6.76h-6.924z"
                    display="inline"
                ></path>
                <path
                    id="path1932"
                    fill="#eaecf1"
                    fillOpacity="1"
                    d="M776.871 353.537h3.621v7.154h-3.62z"
                    display="inline"
                ></path>
                <path
                    id="path1920"
                    fill="#eaecf1"
                    fillOpacity="1"
                    d="M776.871 342.865h3.621v7.153h-3.62z"
                    display="inline"
                ></path>
                <path
                    id="path1918"
                    fill="#eaecf1"
                    fillOpacity="1"
                    d="M751.984 332.309h6.924v6.76h-6.924z"
                    display="inline"
                ></path>
                <path
                    id="path1916"
                    fill="#eaecf1"
                    fillOpacity="1"
                    d="M741.3 332.309h6.925v6.76H741.3z"
                    display="inline"
                ></path>
                <path
                    id="path1914"
                    fill="#eaecf1"
                    fillOpacity="1"
                    d="M727.057 332.309h6.923v6.76h-6.923z"
                    display="inline"
                ></path>
                <path
                    id="path1912"
                    fill="#eaecf1"
                    fillOpacity="1"
                    d="M716.373 332.309h6.924v6.76h-6.924z"
                    display="inline"
                ></path>
                <path
                    id="path1910"
                    fill="#eaecf1"
                    fillOpacity="1"
                    d="M776.871 332.191h3.621v7.155h-3.62z"
                    display="inline"
                ></path>
                <path
                    id="path1896"
                    fill="#eaecf1"
                    fillOpacity="1"
                    d="M776.871 321.52h3.621v7.154h-3.62z"
                    display="inline"
                ></path>
                <path
                    id="path1894"
                    fill="#eaecf1"
                    fillOpacity="1"
                    d="M751.984 310.963h6.924v6.762h-6.924z"
                    display="inline"
                ></path>
                <path
                    id="path1892"
                    fill="#eaecf1"
                    fillOpacity="1"
                    d="M741.3 310.963h6.925v6.762H741.3z"
                    display="inline"
                ></path>
                <path
                    id="path1890"
                    fill="#eaecf1"
                    fillOpacity="1"
                    d="M727.057 310.963h6.923v6.762h-6.923z"
                    display="inline"
                ></path>
                <path
                    id="path1888"
                    fill="#eaecf1"
                    fillOpacity="1"
                    d="M716.373 310.963h6.924v6.762h-6.924z"
                    display="inline"
                ></path>
                <path
                    id="path1886"
                    fill="#eaecf1"
                    fillOpacity="1"
                    d="M776.871 310.848h3.621V318h-3.62z"
                    display="inline"
                ></path>
                <path
                    id="path1884"
                    fill="#eaecf1"
                    fillOpacity="1"
                    d="M776.871 300.174h3.621v7.154h-3.62z"
                    display="inline"
                ></path>
                <path
                    id="path1882"
                    fill="#eaecf1"
                    fillOpacity="1"
                    d="M751.984 289.617h6.924v6.762h-6.924z"
                    display="inline"
                ></path>
                <path
                    id="path1880"
                    fill="#eaecf1"
                    fillOpacity="1"
                    d="M741.3 289.617h6.925v6.762H741.3z"
                    display="inline"
                ></path>
                <path
                    id="path1878"
                    fill="#eaecf1"
                    fillOpacity="1"
                    d="M727.057 289.617h6.923v6.762h-6.923z"
                    display="inline"
                ></path>
                <path
                    id="path1876"
                    fill="#eaecf1"
                    fillOpacity="1"
                    d="M716.373 289.617h6.924v6.762h-6.924z"
                    display="inline"
                ></path>
                <path
                    id="path1874"
                    fill="#eaecf1"
                    fillOpacity="1"
                    d="M776.871 289.502h3.621v7.152h-3.62z"
                    display="inline"
                ></path>
            </g>
        </Group>
    )
}

export default Layer2