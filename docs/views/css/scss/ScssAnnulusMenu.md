---
title: Scss环形菜单
date: 2023-06-21 14:43:50
permalink: /pages/60b12e/
categories:
  - css
  - scss
tags:
  -
---

## 最终效果

<ScssAnnulusMenu/>

## Vue 组件实现的代码

```vue
<template>
  <div class="ScssAnnulusMenu">
    <div class="menu_area">
      <!-- 中间主页按钮 -->
      <div class="center_btn">
        <svg
          t="1687330852507"
          class="icon"
          viewBox="0 0 1136 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="11305"
          width="200"
          height="200"
        >
          <path
            d="M131.938462 570.88h126.621538L592.738462 246.153846l332.996923 324.726154h126.621538s22.055385-6.498462-7.286154-30.523077C1015.729231 516.332308 629.366154 119.532308 629.366154 119.532308s-28.356923-40.763077-78.572308 0S131.938462 550.793846 131.938462 550.793846s-18.707692 12.8 0 20.086154z"
            fill="#FFA44C"
            p-id="11306"
          ></path>
          <path
            d="M1057.083077 525.784615c-22.449231-18.510769-280.024615-281.796923-413.341539-418.658461-4.135385-5.12-18.116923-20.676923-41.353846-24.024616-20.676923-2.953846-41.944615 4.332308-63.40923 21.661539-49.230769 39.975385-380.061538 389.907692-419.446154 431.852308-5.316923 4.135385-16.147692 14.178462-14.572308 28.750769 0.787692 5.907692 4.332308 16.935385 20.283077 23.04l3.347692 1.181538h137.846154l326.301539-317.046154 325.316923 317.243077h137.058461l2.56-0.787692c8.073846-2.363077 18.313846-9.452308 20.873846-21.858461 4.135385-20.283077-15.163077-36.036923-21.464615-41.353847zM156.750769 551.975385c60.455385-63.803077 362.141538-382.424615 405.858462-417.87077 12.8-10.436923 24.221538-14.966154 34.067692-13.784615 10.24 1.378462 16.541538 9.255385 17.132308 10.043077l1.969231 2.363077c38.4 39.581538 368.049231 377.895385 413.932307 419.446154H933.415385L592.738462 219.766154 251.076923 551.975385H156.750769z"
            fill="#493B4E"
            p-id="11307"
          ></path>
          <path
            d="M308.972308 615.778462l257.575384-258.56s22.055385-29.341538 55.532308 0 254.424615 258.56 254.424615 258.56v287.704615h-186.28923s-3.150769-167.581538-3.15077-168.172308c-1.772308-97.673846-181.563077-96.886154-187.470769-4.135384-5.316923 81.723077-3.150769 172.504615-3.150769 172.504615h-187.470769V615.778462z"
            fill="#FFA44C"
            p-id="11308"
          ></path>
          <path
            d="M496.443077 903.483077h193.772308l-4.529231-179.790769s-5.513846-69.12-94.326154-59.667693c0 0-63.015385-9.255385-84.283077 35.643077 0 0-7.876923 1.969231-9.452308 65.772308s-1.181538 138.043077-1.181538 138.043077z"
            fill="#FFFFFF"
            p-id="11309"
          ></path>
          <path
            d="M890.092308 602.781538c-9.058462-9.452308-221.735385-230.006154-255.606154-259.741538-15.163077-13.193846-30.916923-19.101538-46.867692-17.329231-19.495385 1.969231-31.507692 14.769231-35.052308 19.101539L290.067692 607.901538v314.289231H895.212308V608.098462l-5.12-5.316924z m-184.32 132.135385c0-0.590769 0-5.907692-1.378462-13.587692-0.590769-5.12-4.923077-34.658462-30.326154-55.729231-0.393846-0.393846-0.984615-0.787692-1.378461-0.984615-20.283077-16.541538-47.458462-23.236923-80.935385-19.692308-12.209231-1.575385-50.609231-3.938462-79.556923 18.904615-0.590769 0.590769-1.378462 1.181538-1.969231 1.575385-0.393846 0.196923-0.590769 0.590769-0.984615 0.787692-0.590769 0.393846-0.984615 0.984615-1.575385 1.378462-0.590769 0.590769-1.378462 1.181538-1.96923 1.969231l-0.787693 0.787692c-0.787692 0.787692-1.575385 1.772308-2.363077 2.56-0.196923 0.196923-0.393846 0.393846-0.393846 0.590769-0.787692 0.984615-1.575385 1.772308-2.363077 2.756923-0.196923 0.393846-0.590769 0.590769-0.787692 0.984616l-1.772308 2.363076c-1.772308 2.56-3.544615 5.316923-5.12 8.073847-3.544615 4.332308-7.089231 11.421538-9.452307 27.963077-0.787692 4.332308-1.378462 9.058462-1.772308 13.784615 0 0.590769 0 1.378462-0.196923 1.969231-0.787692 9.058462-1.378462 20.086154-1.772308 33.28-1.969231 48.049231-1.969231 94.72-1.575385 119.532307h-149.464615V623.655385l252.061539-253.046154 1.575384-1.772308s4.332308-5.12 10.043077-5.710769c5.12-0.590769 11.224615 2.363077 18.116923 8.270769 29.735385 25.993846 218.584615 221.735385 247.926154 252.061539v261.12h-149.070769l-2.756923-149.661539z m-189.243077 31.310769c0.393846-9.846154 0.984615-19.889231 1.575384-29.735384 0.590769-6.695385 1.181538-11.815385 1.772308-15.556923 1.575385-7.483077 4.332308-13.981538 8.073846-19.298462 17.723077-24.024615 59.076923-19.298462 60.652308-18.904615l2.363077 0.393846 2.56-0.393846c24.221538-2.56 42.929231 1.181538 55.532308 11.224615 0.196923 0.196923 0.590769 0.393846 0.787692 0.590769 10.830769 9.452308 15.163077 22.449231 17.132308 31.31077l3.938461 158.523076h-155.569231c-0.196923-24.418462 0.196923-74.24 1.181539-118.153846z"
            fill="#493B4E"
            p-id="11310"
          ></path>
        </svg>
      </div>
      <div class="item_other">
        <svg
          t="1687330511962"
          class="icon"
          viewBox="0 0 1179 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2358"
          width="120"
          height="120"
        >
          <path
            d="M142.31918 540.267127l350.13559 373.653781c54.296613 63.852817 139.806023 63.883844 195.033436-1.054906l362.204951-388.670672c42.661625-48.866952 65.466202-112.130263 65.466203-182.902021a279.239726 279.239726 0 0 0-501.018122-169.653647 30.99561 30.99561 0 0 1-25.534922 12.131415 30.99561 30.99561 0 0 1-25.503895-12.131415A279.239726 279.239726 0 0 0 62.053272 341.293309c0 72.850542 28.792718 144.242832 77.411458 195.498835 1.054906 1.116959 1.985705 2.264944 2.85445 3.474983z m-54.606879 31.926409A349.732244 349.732244 0 0 1 0 341.293309C0 152.806494 152.806184 0.00031 341.292999 0.00031c95.065613 0 183.708713 39.155615 247.313317 106.111096A340.486306 340.486306 0 0 1 835.95066 0.00031c188.486815 0 341.292999 152.806184 341.292999 341.292999 0 80.793361-25.069522 154.636755-72.198982 213.463257-1.147986 1.923651-2.482131 3.754223-4.095516 5.491715l-5.181449 5.553768c-2.699317 3.071637-5.491715 6.112247-8.315138 9.090804-0.620533 0.620533-1.210039 1.241065-1.861598 1.799545L733.810974 954.069375c-79.055869 93.048882-209.553901 93.017855-287.616918 1.147985L90.783938 576.040839a31.243823 31.243823 0 0 1-3.102664-3.847303z"
            fill="#d81e06"
            p-id="2359"
          ></path>
        </svg>
      </div>
      <div class="item_other">
        <svg
          t="1687330594778"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="5401"
          width="130"
          height="130"
        >
          <path
            d="M934.966272 879.950848 709.541888 654.526464c47.665152-59.81696 76.166144-135.581696 76.166144-218.012672 0-193.36704-156.752896-350.124032-350.12096-350.124032S85.464064 243.145728 85.464064 436.513792s156.756992 350.124032 350.124032 350.124032c79.875072 0 153.486336-26.766336 212.39808-71.79264l226.04288 226.04288c8.416256 8.416256 19.441664 12.62592 30.470144 12.62592 11.025408 0 22.050816-4.209664 30.466048-12.62592C951.798784 924.055552 951.798784 896.782336 934.966272 879.950848zM165.953536 436.513792c0-148.912128 120.722432-269.630464 269.63456-269.630464S705.21856 287.60064 705.21856 436.513792 584.500224 706.148352 435.588096 706.148352 165.953536 585.42592 165.953536 436.513792z"
            fill="#FF9000"
            p-id="5402"
          ></path>
          <path
            d="M291.135488 302.036992c-8.997888-4.864-20.23424-1.511424-25.097216 7.486464-20.256768 37.476352-32.600064 78.152704-36.688896 120.899584-0.973824 10.181632 6.491136 19.224576 16.672768 20.1984 0.59904 0.057344 1.195008 0.084992 1.784832 0.084992 9.433088 0 17.497088-7.175168 18.413568-16.75776 3.613696-37.7856 14.5152-73.72288 32.401408-106.814464C303.485952 318.138368 300.1344 306.900992 291.135488 302.036992z"
            fill="#FF9000"
            p-id="5403"
          ></path>
        </svg>
      </div>
      <div class="item_other">
        <svg
          t="1687330682452"
          class="icon"
          viewBox="0 0 1032 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="7534"
          width="130"
          height="130"
        >
          <path
            d="M280 760l-7.968 128 188.488-104c17.136 2.056 65.616 4.672 83.488 4.672 195.256 0 352-127.52 352-282.336C896 351.52 739.264 224 544 224c-195.264 0-352 127.52-352 282.336 0 74.4 35.864 142.32 95.04 192.952C296.8 707.656 269.04 752.624 280 760z"
            fill="#FFCB01"
            p-id="7535"
          ></path>
          <path
            d="M723.36 405.688c-14.248 0-26.56 5.264-36.96 15.784-10.384 10.528-15.592 22.984-15.608 37.368-0.016 14.392 5.184 26.848 15.608 37.376C696.832 506.736 709.144 512 723.36 512c14.208 0 26.52-5.264 36.952-15.784 10.424-10.528 15.624-22.984 15.608-37.376-0.016-14.384-5.216-26.84-15.608-37.36-10.4-10.528-22.72-15.792-36.96-15.792zM302.84 405.688c-14.24 0-26.56 5.264-36.96 15.784-10.376 10.528-15.584 22.984-15.6 37.368-0.024 14.392 5.184 26.848 15.6 37.376C276.32 506.736 288.64 512 302.848 512c14.208 0 26.528-5.264 36.96-15.784 10.424-10.528 15.624-22.984 15.6-37.376-0.008-14.384-5.216-26.84-15.6-37.36-10.4-10.528-22.72-15.792-36.96-15.792zM513.096 405.688c-14.24 0-26.56 5.264-36.96 15.784-10.376 10.528-15.584 22.984-15.6 37.368-0.024 14.392 5.184 26.848 15.6 37.376C486.576 506.736 498.896 512 513.104 512c14.208 0 26.528-5.264 36.96-15.784 10.424-10.528 15.624-22.984 15.6-37.376-0.008-14.384-5.216-26.84-15.6-37.36-10.4-10.528-22.72-15.792-36.96-15.792z"
            p-id="7536"
          ></path>
          <path
            d="M244.584 737.2v206.96l208.72-124.448c20.64 2.712 41.76 4.12 63.28 4.12 235.2 0 424-168.024 424-372s-188.8-372-424-372-424 168.024-424 372c0 114.224 58.72 216.872 152 285.376z m64-16.6v-17.04l-14.16-9.504c-83.44-56.176-137.84-143.608-137.84-242.224 0-171.328 162.48-308 360-308s360 136.672 360 308-162.48 308-360 308c-22.16 0-43.92-1.72-64.96-5.024l-11.44-1.784-131.6 78.472V720.6z"
            p-id="7537"
          ></path>
        </svg>
      </div>
      <div class="item_other">
        <svg
          t="1687330759111"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="9562"
          width="130"
          height="130"
        >
          <path
            d="M298.5 691.8l11.2 71.2c2.8 17.5 17.8 30.3 35.5 30.3H358c9.2-13.9 24.9-23.1 42.8-23.1s33.7 9.2 42.8 23.1H708c9.2-13.9 24.9-23.1 42.9-23.1 17.9 0 33.7 9.2 42.8 23.1h4.4c19.8 0 35.9-16.1 35.9-35.9 0-19.8-16.1-35.9-35.9-35.9H375.9l-4.7-29.7h-72.7zM314 328.6l-0.9-5.5-15.9-100.7c-2.5-15.9-15.3-28.2-31.4-30.1l-163.3-19c-19.8-2.2-37.6 11.8-39.9 31.6-2.3 19.7 11.8 37.6 31.6 39.8l136.2 15.8 10.9 69 42.9-0.5 29.8-0.4z"
            fill="#FF7C20"
            p-id="9563"
          ></path>
          <path
            d="M885 321.4l-571 7.2L370.3 686l0.9 5.8h447.3c19.1 0 35.7-12.6 40.5-30.7l67.1-288.9c6.8-26-13.6-51.2-41.1-50.8z"
            fill="#99C236"
            p-id="9564"
          ></path>
          <path
            d="M314 328.6l-29.8 0.4-42.8 0.5 0.1 0.6 56 355.5 1 6.2H371.2l-0.9-5.8z"
            fill="#FFBA3B"
            p-id="9565"
          ></path>
          <path
            d="M349.5 821.6c0 28.4 23 51.3 51.3 51.3s51.3-23 51.3-51.3c0-10.4-3.2-20.1-8.5-28.2H358c-5.4 8.1-8.5 17.7-8.5 28.2zM400.8 770.2c-17.9 0-33.7 9.2-42.8 23.1h85.7c-9.2-13.9-24.9-23.1-42.9-23.1zM699.5 821.6c0 28.4 23 51.3 51.3 51.3 28.4 0 51.3-23 51.3-51.3 0-10.4-3.2-20.1-8.5-28.2H708c-5.3 8.1-8.5 17.7-8.5 28.2zM750.9 770.2c-17.9 0-33.7 9.2-42.8 23.1h85.7c-9.3-13.9-25-23.1-42.9-23.1z"
            fill="#FF7C20"
            p-id="9566"
          ></path>
        </svg>
      </div>
      <div class="item_other">
        <svg
          t="1687330971309"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="12402"
          width="130"
          height="130"
        >
          <path
            d="M895.386693 533.07156l-67.639913-48.537284 45.238326-72.585278c3.910218-6.335802 4.644344-14.342586 1.941286-21.401251-2.73275-6.997232-8.524869-12.103348-15.493432-13.583887l-79.806742-16.956565 15.814933-85.507735c1.381221-7.471291-0.764842-15.191387-5.821812-20.581119-4.966868-5.328299-12.256931-7.597229-19.135393-6.209864l-79.809814 16.956565-15.814932-85.57224c-1.381221-7.46822-6.143312-13.709824-12.69925-16.608444-6.583583-2.901691-14.050778-2.142992-19.929928 2.078487l-67.69725 48.508615-45.238325-72.523845c-7.850129-12.63884-27.42784-12.63884-35.274897 0l-45.298735 72.523845-67.639912-48.508615c-5.935463-4.285984-13.403683-4.980178-19.987265-2.078487-6.526245 2.898619-11.257619 9.140224-12.639865 16.608444l-15.844625 85.57224-79.809814-17.02107c-6.965492-1.417057-14.138832 0.884637-19.135392 6.274369-5.027277 5.357992-7.173341 13.048395-5.791096 20.516614l15.814933 85.57224-79.867151 16.956565c-6.968564 1.481562-12.759659 6.648087-15.493433 13.64532-2.703057 7.061737-1.968931 15.065449 1.941287 21.401251l45.238325 72.523845-67.579503 48.537284c-5.908842 4.19281-9.466844 11.314957-9.466844 18.909114 0 7.597229 3.558002 14.687635 9.466844 18.91321l76.486282 54.96626c31.921673 153.364711 159.676964 263.646376 307.240341 263.646375 147.507063 0 275.261331-110.281664 307.183003-263.646375l76.546691-54.96626c5.848433-4.224551 9.406434-11.314957 9.406435-18.91321 0.003072-7.593134-3.55493-14.716304-9.403363-18.909114z"
            fill="#FFFFFF"
            p-id="12403"
          ></path>
          <path
            d="M511.656998 833.026957c-121.755323 0-229.371814-92.314525-255.827987-219.459581l-4.583934-22.062681-55.000048-39.522997 72.314972-51.939655-48.327387-77.471259 85.363367-18.124818-16.901275-91.558897 85.335723 18.186251 16.931991-91.465724 72.223847 51.784024 48.44411-77.565457 48.384725 77.565457 72.311901-51.816788 16.931992 91.465723 85.366439-18.121746-16.904347 91.497464 85.30603 18.154511-48.327387 77.500952 72.344665 51.909962-55.030765 39.522997-4.583934 22.062681c-26.457197 127.145056-134.045019 219.459581-255.772698 219.459581z"
            fill="#79CCBF"
            p-id="12404"
          ></path>
          <path
            d="M511.656998 913.713216c-153.650375 0-289.779001-114.219527-327.140576-273.038476l-69.168573-49.673796c-12.169901-8.697906-19.459964-23.292367-19.459964-39.019246 0-15.788312 7.32078-30.382773 19.577711-39.080679l48.738989-35.017902-32.689587-52.413714c-8.112243-13.142592-9.611212-29.563665-4.054586-44.060857 5.73171-14.655895 17.636425-25.151743 31.982082-28.178348l57.701058-12.261027-11.405059-61.837554c-2.880189-15.476027 1.619787-31.296079 12.025533-42.388852 10.023837-10.843969 24.749356-15.69821 39.242453-12.893788l57.848497 12.358296 11.465468-61.840626c2.850497-15.443262 12.609148-28.239781 26.133649-34.227463 13.668869-6.115667 29.218616-4.285984 41.241077 4.350489l48.827044 35.01483 32.743852-52.413713c15.697186-25.277681 57.059081-25.309421 72.814629 0.032764l32.686515 52.380949 48.914074-35.079335c11.965124-8.540227 27.632617-10.243973 41.067016-4.318748 13.581839 5.989729 23.397827 18.815941 26.251396 34.291967l11.432704 61.808886 57.676484-12.232358c15.312205-3.089062 29.454109 2.081559 39.476922 12.829283 10.376054 11.03134 14.872958 26.916921 11.991745 42.392948l-11.405058 61.773049 57.64372 12.261027c14.346681 3.027629 26.281089 13.490713 31.924744 27.956165 5.613963 14.655895 4.114995 31.076967-3.939911 44.125362l-32.746924 52.571392 48.887453 35.079335c12.169901 8.700977 19.430272 23.292367 19.430271 39.019246 0 15.666469-7.23375 30.228166-19.372934 38.987505l-69.256627 49.738302c-37.391268 158.752396-173.465628 273.004687-327.085287 273.004687zM248.391508 271.377734l17.431648 83.932999c1.177468 6.303038-0.026621 12.826211-3.379846 18.154511-3.32046 5.325228-8.494153 9.046027-14.373302 10.272641l-79.867151 16.956565 46.060506 70.380854c6.937847 11.092774 4.175404 26.129553-6.20065 33.565008l-67.579503 48.537284 76.516998 52.571392c4.788712 3.469947 8.199274 8.762411 9.463772 14.846337 29.513494 141.80095 149.44835 244.704497 285.194042 244.704497 135.719071 0 255.62321-102.903547 285.136705-244.704497 1.264498-6.083927 4.67506-11.37639 9.493465-14.846337l76.54669-54.96626-67.639912-46.142416c-10.345337-7.436479-13.13952-22.440495-6.231366-33.565008l45.238325-72.585279-78.954869-14.75214c-5.87915-1.226615-11.052842-4.947414-14.376374-10.272641-3.350153-5.328299-4.554242-11.883213-3.379845-18.154511l15.814933-85.507735-78.250436 18.593758c-12.109492 2.491113-24.105332-5.893484-26.515558-19.035053l-15.811862-85.572239-65.641288 49.42192c-10.405747 7.406786-24.400211 4.379158-31.308365-6.683923l-45.238325-72.520774-43.062569 72.520774c-6.908154 11.12861-20.932312 14.120403-31.308366 6.652183L368.530117 184.673077l-13.786616 84.720367c-1.14368 6.271298-4.614651 11.818708-9.580495 15.378758-4.969939 3.624554-11.052842 4.918745-16.961685 3.624554l-79.809813-17.019022z"
            fill="#27323A"
            p-id="12405"
          ></path>
          <path
            d="M511.599661 668.692338c-31.513143 0-57.086726 27.35924-57.086726 61.208889 0 33.85272 25.573584 61.273393 57.086726 61.273393 31.569456 0 57.144064-27.420673 57.144064-61.273393 0-33.850673-25.573584-61.208889-57.144064-61.208889z"
            fill="#27323A"
            p-id="12406"
          ></path>
          <path
            d="M511.599661 756.565249c-13.698562 0-24.869151-11.977411-24.869151-26.665046s11.170589-26.661974 24.869151-26.661974c13.755899 0 24.926488 11.973315 24.926488 26.661974s-11.170589 26.665046-24.926488 26.665046z"
            fill="#F4CE73"
            p-id="12407"
          ></path>
          <path
            d="M511.656998 642.408178c-7.582895 0-14.168525-5.482906-16.049402-13.364775l-63.434815-265.696194c-1.294191-5.296559-0.177132-10.966836 2.940598-15.255891 3.173021-4.347417 7.994497-6.868223 13.108804-6.868223h126.869631c5.117379 0 9.936807 2.520806 13.051466 6.868223 3.176092 4.289056 4.23479 9.960356 3.001008 15.255891l-63.437887 265.696194c-1.880877 7.880845-8.523845 13.364775-16.049403 13.364775z"
            fill="#27323A"
            p-id="12408"
          ></path>
          <path
            d="M469.564049 376.711984l42.092949 176.373462 42.096022-176.373462h-84.188971z"
            fill="#F4CE73"
            p-id="12409"
          ></path>
        </svg>
      </div>
      <div class="item_other">
        <svg
          t="1687336173649"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2385"
          width="200"
          height="200"
        >
          <path
            d="M512 14.208c274.56 0 497.792 223.168 497.792 497.792 0 274.56-223.168 497.792-497.792 497.792C237.44 1009.792 14.208 786.56 14.208 512 14.208 237.44 237.44 14.208 512 14.208z m0 71.104A427.072 427.072 0 0 0 85.312 512 427.072 427.072 0 0 0 512 938.688 427.072 427.072 0 0 0 938.688 512 427.072 427.072 0 0 0 512 85.312z m35.584 628.16v71.104H476.416v-71.04h71.168z m0-474.048v402.944H476.416V239.424h71.168z"
            fill="#FF6E6E"
            p-id="2386"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScssAnnulusMenu'
}
</script>

<style lang="scss" scoped>
// 导入Scss的math模块
@use 'sass:math';
.ScssAnnulusMenu {
  background: rgba($color: #000000, $alpha: 0.8);
  padding: 50px 0;
  // 定义变量
  $width_height: 500px;
  $min_width_height: calc($width_height / 4);
  $r: calc($width_height / 2 - $min_width_height / 2);
  $n: 6;
  $step: calc(360deg / $n);
  // 定义混合
  @mixin flex_center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .menu_area {
    background: #ccc;
    border-radius: 50%;
    width: $width_height;
    height: $width_height;
    margin: 0 auto;
    position: relative;
    @include flex_center;
    .center_btn {
      background: #fff;
      border-radius: 50%;
      width: 50%;
      height: 50%;
      @include flex_center;
    }
    .item_other {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: $min_width_height;
      height: $min_width_height;
      @include flex_center;
      svg {
        width: 80%;
        height: 80%;
        opacity: 0.6;
      }
      &:hover {
        svg {
          width: 80%;
          height: 80%;
          opacity: 1;
        }
      }
      /* 循环设置定位位置 */
      @for $i from 1 through $n + 1 {
        &:nth-of-type(#{$i}) {
          $deg: $step * ($i - 1);
          $x: $r * math.sin($deg) * (-1) - calc($min_width_height / 2);
          $y: $r * math.cos($deg) - calc($min_width_height / 2);
          transform: translate($x, $y);
        }
      }
    }
  }
}
</style>
```