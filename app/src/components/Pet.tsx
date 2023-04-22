import React from "react";
import { PetColors } from "../data/types";
import Svg, { Path, Mask, G, Defs, RadialGradient, Stop } from "react-native-svg";

interface Props {
  color: PetColors;
}

const WIDTH = 266;
const HEIGHT = 300;

const YellowP = () => (
  <Svg width={WIDTH} height={HEIGHT} viewBox='0 0 266 306' fill='none'>
    <Path
      d='M105.908 305.717c-10.383 0-16.14-9.874-16.14-24.875v-39.687h37.597v34.56c0 25.445-11.074 30.002-21.457 30.002zM.38 191.025s-.653 91.017 31.46 87.728c7.417-.76 12.913-12.913 12.913-31.901M161.734 305.717c10.383 0 16.14-9.874 16.14-24.875v-39.687h-37.598v34.56c0 25.445 11.075 30.002 21.458 30.002zM265.982 191.025s.653 91.017-31.46 87.728c-7.417-.76-12.913-12.913-12.913-31.901'
      fill='#F38E55'
    />
    <Path d='M132.616 59.228s5.575-44.866-50.901-42.356c0 0 4.227 61.493 50.901 42.356z' fill='#F99D5A' />
    <Path d='M135.339 61.791s62.99 20.9 75.583-61.117c0 0-89.737-11.567-75.583 61.117z' fill='#F99D5A' />
    <Path
      d='M265.602 178.872c-5.047-67.03-63.122-116.28-123.051-121.133-1.333-.106-2.639-.47-3.79-1.147-1.956-1.15-3.638-3.114-3.638-6.463 0-6.457 1.922-23.072 5.533-33.74.832-2.457-1.01-4.997-3.604-4.997h-8.359c-2.594 0-4.432 2.54-3.604 4.997 3.612 10.668 5.534 27.283 5.534 33.74 0 3.133-1.478 5.054-3.266 6.232-1.246.816-2.701 1.253-4.186 1.367C63.038 62.448 3.022 110.399.14 178.872c-2.617 62.162 31.6 83.551 97.78 83.551h69.898c66.179 0 102.451-21.511 97.78-83.551h.004z'
      fill='url(#paint0_radial_531_1916)'
    />
    <Path
      d='M235.6 186.168c0 40.324-30.629 53.578-83.931 54.984-2.502.064-35.429 0-37.977 0-56.841 0-83.93-12.768-83.93-54.984s52.788-79.833 102.919-79.833c54.307 0 102.919 37.617 102.919 79.833z'
      fill='#F9F3E3'
    />
    <Mask id='a' maskUnits='userSpaceOnUse' x={29} y={106} width={207} height={136}>
      <Path
        d='M235.599 186.168c0 40.324-30.629 53.578-83.931 54.984-2.502.064-35.429 0-37.977 0-56.84 0-83.93-12.768-83.93-54.984s52.788-79.833 102.919-79.833c54.307 0 102.919 37.617 102.919 79.833z'
        fill='#fff'
      />
    </Mask>
    <G mask='url(#a)'>
      <Path
        d='M57.106 236.219c14.682 0 26.584-11.902 26.584-26.584 0-14.683-11.902-26.585-26.584-26.585S30.52 194.952 30.52 209.635c0 14.682 11.903 26.584 26.585 26.584zM208.256 236.219c14.682 0 26.584-11.902 26.584-26.584 0-14.683-11.902-26.585-26.584-26.585s-26.584 11.902-26.584 26.585c0 14.682 11.902 26.584 26.584 26.584z'
        fill='#FDBD98'
      />
      <Path
        d='M45.496 213.269a.378.378 0 01-.27-.645l6.51-6.509a.378.378 0 11.535.535l-6.51 6.509a.373.373 0 01-.269.11h.004zM52.928 214.192a.377.377 0 01-.27-.645l8.355-8.355a.378.378 0 11.535.535l-8.355 8.355a.373.373 0 01-.27.11h.005zM62.206 213.269a.378.378 0 01-.27-.645l6.51-6.509a.378.378 0 11.535.535l-6.51 6.509a.373.373 0 01-.269.11h.004zM219.867 213.269a.39.39 0 01-.27-.11l-6.509-6.509a.379.379 0 01.535-.536l6.509 6.509a.377.377 0 01-.269.646h.004zM212.434 214.192a.39.39 0 01-.27-.11l-8.355-8.355a.379.379 0 01.536-.536l8.355 8.355a.379.379 0 01-.27.646h.004zM203.157 213.269a.39.39 0 01-.27-.11l-6.509-6.509a.379.379 0 01.535-.536l6.509 6.509a.377.377 0 01-.269.646h.004z'
        fill='#FFE8CA'
      />
      <G filter='url(#filter0_i_531_1916)'>
        <Path
          d='M235.6 186.168c0 40.324-30.629 53.578-83.931 54.984-2.502.064-35.429 0-37.977 0-56.841 0-83.93-12.768-83.93-54.984s52.788-79.833 102.919-79.833c54.307 0 102.919 37.617 102.919 79.833z'
          fill='#EDF6F9'
          fillOpacity={0.01}
        />
      </G>
    </G>
    <Path
      d='M82.687 205.457c10.906 0 19.748-8.842 19.748-19.749 0-10.906-8.842-19.748-19.748-19.748-10.907 0-19.748 8.842-19.748 19.748 0 10.907 8.841 19.749 19.748 19.749z'
      fill='#fff'
    />
    <Path
      d='M82.686 197.982c6.78 0 12.275-5.495 12.275-12.274 0-6.779-5.496-12.274-12.275-12.274s-12.274 5.495-12.274 12.274c0 6.779 5.495 12.274 12.274 12.274z'
      fill='#39393B'
    />
    <Path
      d='M182.67 205.457c10.907 0 19.748-8.842 19.748-19.749 0-10.906-8.841-19.748-19.748-19.748-10.907 0-19.748 8.842-19.748 19.748 0 10.907 8.841 19.749 19.748 19.749z'
      fill='#fff'
    />
    <Path
      d='M182.67 197.982c6.779 0 12.274-5.495 12.274-12.274 0-6.779-5.495-12.274-12.274-12.274-6.779 0-12.274 5.495-12.274 12.274 0 6.779 5.495 12.274 12.274 12.274z'
      fill='#39393B'
    />
    <Path
      d='M132.682 208.114c-5.397 0-10.368-2.02-13.999-5.689-3.706-3.744-5.749-9.008-5.749-14.818a9.493 9.493 0 019.494-9.495 9.493 9.493 0 019.494 9.495c0 .862.171 1.314.247 1.447.057.022.217.072.513.072.296 0 .456-.05.513-.072.079-.133.246-.585.246-1.447a9.494 9.494 0 019.495-9.495 9.493 9.493 0 019.494 9.495c0 5.81-2.043 11.074-5.75 14.818-3.63 3.669-8.602 5.689-13.998 5.689z'
      fill='#FC976B'
    />
    <Path
      d='M132.682 199c-6.362 0-10.634-4.58-10.634-11.393a.38.38 0 01.759 0c0 6.361 3.969 10.634 9.875 10.634 5.905 0 9.874-4.273 9.874-10.634a.38.38 0 01.379-.38c.209 0 .38.171.38.38 0 6.813-4.272 11.393-10.633 11.393z'
      fill='#000'
    />
    <Path
      d='M62.387 157.306l-3.49 3.491a4.937 4.937 0 006.981 6.982l3.491-3.491a4.937 4.937 0 10-6.982-6.982zM202.975 157.304a4.937 4.937 0 00-6.982 6.982l3.491 3.491a4.937 4.937 0 006.982-6.982l-3.491-3.491z'
      fill='#39393B'
    />
    <Defs>
      <RadialGradient
        id='paint0_radial_531_1916'
        cx={0}
        cy={0}
        r={1}
        gradientUnits='userSpaceOnUse'
        gradientTransform='matrix(-110.5 159.00052 -168.48173 -117.08913 198.5 69.5)'>
        <Stop stopColor='#FFEFB8' />
        <Stop offset={1} stopColor='#FAB651' />
      </RadialGradient>
    </Defs>
  </Svg>
);

const PinkP = () => (
  <Svg width={WIDTH} height={HEIGHT} viewBox='0 0 266 306' fill='none'>
    <Path
      d='M105.908 305.717c-10.383 0-16.14-9.874-16.14-24.875v-39.687h37.597v34.56c0 25.445-11.074 30.002-21.457 30.002zM.38 191.025s-.653 91.017 31.46 87.728c7.417-.76 12.913-12.913 12.913-31.901M161.734 305.717c10.383 0 16.14-9.874 16.14-24.875v-39.687h-37.598v34.56c0 25.445 11.075 30.002 21.458 30.002zM265.982 191.025s.653 91.017-31.46 87.728c-7.417-.76-12.913-12.913-12.913-31.901M132.616 59.228s5.575-44.866-50.901-42.356c0 0 4.227 61.493 50.901 42.356z'
      fill='#CC5167'
    />
    <Path d='M135.339 61.791s62.99 20.9 75.583-61.117c0 0-89.737-11.567-75.583 61.117z' fill='#CC5167' />
    <Path
      d='M265.602 178.872c-5.047-67.03-63.122-116.28-123.051-121.133-1.333-.106-2.639-.47-3.79-1.147-1.956-1.15-3.638-3.114-3.638-6.463 0-6.457 1.922-23.072 5.533-33.74.832-2.457-1.01-4.997-3.604-4.997h-8.359c-2.594 0-4.432 2.54-3.604 4.997 3.612 10.668 5.534 27.283 5.534 33.74 0 3.133-1.478 5.054-3.266 6.232-1.246.816-2.701 1.253-4.186 1.367C63.038 62.448 3.022 110.399.14 178.872c-2.617 62.162 31.6 83.551 97.78 83.551h69.898c66.179 0 102.451-21.511 97.78-83.551h.004z'
      fill='url(#paint0_radial_531_1914)'
    />
    <Path
      d='M235.6 186.168c0 40.324-30.629 53.578-83.931 54.984-2.502.064-35.429 0-37.977 0-56.841 0-83.93-12.768-83.93-54.984s52.788-79.833 102.919-79.833c54.307 0 102.919 37.617 102.919 79.833z'
      fill='#FFE2E9'
    />
    <Mask id='a' maskUnits='userSpaceOnUse' x={29} y={106} width={207} height={136}>
      <Path
        d='M235.599 186.168c0 40.324-30.629 53.578-83.931 54.984-2.502.064-35.429 0-37.977 0-56.84 0-83.93-12.768-83.93-54.984s52.788-79.833 102.919-79.833c54.307 0 102.919 37.617 102.919 79.833z'
        fill='#fff'
      />
    </Mask>
    <G mask='url(#a)'>
      <Path
        d='M57.106 236.219c14.682 0 26.584-11.902 26.584-26.584 0-14.683-11.902-26.585-26.584-26.585S30.52 194.952 30.52 209.635c0 14.682 11.903 26.584 26.585 26.584zM208.256 236.219c14.682 0 26.584-11.902 26.584-26.584 0-14.683-11.902-26.585-26.584-26.585s-26.584 11.902-26.584 26.585c0 14.682 11.902 26.584 26.584 26.584z'
        fill='#FAC2DB'
      />
      <Path
        d='M45.496 213.269a.378.378 0 01-.27-.645l6.51-6.509a.378.378 0 11.535.535l-6.51 6.509a.373.373 0 01-.269.11h.004zM52.928 214.192a.377.377 0 01-.27-.645l8.355-8.355a.378.378 0 11.535.535l-8.355 8.355a.373.373 0 01-.27.11h.005zM62.206 213.269a.378.378 0 01-.27-.645l6.51-6.509a.378.378 0 11.535.535l-6.51 6.509a.373.373 0 01-.269.11h.004zM219.867 213.269a.39.39 0 01-.27-.11l-6.509-6.509a.379.379 0 01.535-.536l6.509 6.509a.377.377 0 01-.269.646h.004zM212.434 214.192a.39.39 0 01-.27-.11l-8.355-8.355a.379.379 0 01.536-.536l8.355 8.355a.379.379 0 01-.27.646h.004zM203.157 213.269a.39.39 0 01-.27-.11l-6.509-6.509a.379.379 0 01.535-.536l6.509 6.509a.377.377 0 01-.269.646h.004z'
        fill='#FEE1E8'
      />
      <G filter='url(#filter0_i_531_1914)'>
        <Path
          d='M235.6 186.168c0 40.324-30.629 53.578-83.931 54.984-2.502.064-35.429 0-37.977 0-56.841 0-83.93-12.768-83.93-54.984s52.788-79.833 102.919-79.833c54.307 0 102.919 37.617 102.919 79.833z'
          fill='#EDF6F9'
          fillOpacity={0.01}
        />
      </G>
    </G>
    <Path
      d='M82.687 205.457c10.906 0 19.748-8.842 19.748-19.749 0-10.906-8.842-19.748-19.748-19.748-10.907 0-19.748 8.842-19.748 19.748 0 10.907 8.841 19.749 19.748 19.749z'
      fill='#fff'
    />
    <Path
      d='M82.686 197.982c6.78 0 12.275-5.495 12.275-12.274 0-6.779-5.496-12.274-12.275-12.274s-12.274 5.495-12.274 12.274c0 6.779 5.495 12.274 12.274 12.274z'
      fill='#39393B'
    />
    <Path
      d='M182.67 205.457c10.907 0 19.748-8.842 19.748-19.749 0-10.906-8.841-19.748-19.748-19.748-10.907 0-19.748 8.842-19.748 19.748 0 10.907 8.841 19.749 19.748 19.749z'
      fill='#fff'
    />
    <Path
      d='M182.67 197.982c6.779 0 12.274-5.495 12.274-12.274 0-6.779-5.495-12.274-12.274-12.274-6.779 0-12.274 5.495-12.274 12.274 0 6.779 5.495 12.274 12.274 12.274z'
      fill='#39393B'
    />
    <Path
      d='M132.682 208.114c-5.397 0-10.368-2.02-13.999-5.689-3.706-3.744-5.749-9.008-5.749-14.818a9.493 9.493 0 019.494-9.495 9.493 9.493 0 019.494 9.495c0 .862.171 1.314.247 1.447.057.022.217.072.513.072.296 0 .456-.05.513-.072.079-.133.246-.585.246-1.447a9.494 9.494 0 019.495-9.495 9.493 9.493 0 019.494 9.495c0 5.81-2.043 11.074-5.75 14.818-3.63 3.669-8.602 5.689-13.998 5.689z'
      fill='#EF8296'
    />
    <Path
      d='M132.682 199c-6.362 0-10.634-4.58-10.634-11.393a.38.38 0 01.759 0c0 6.361 3.969 10.634 9.875 10.634 5.905 0 9.874-4.273 9.874-10.634a.38.38 0 01.379-.38c.209 0 .38.171.38.38 0 6.813-4.272 11.393-10.633 11.393z'
      fill='#000'
    />
    <Path
      d='M62.387 157.306l-3.49 3.491a4.937 4.937 0 006.981 6.982l3.491-3.491a4.937 4.937 0 10-6.982-6.982zM202.975 157.304a4.937 4.937 0 00-6.982 6.982l3.491 3.491a4.937 4.937 0 006.982-6.982l-3.491-3.491z'
      fill='#39393B'
    />
    <Defs>
      <RadialGradient
        id='paint0_radial_531_1914'
        cx={0}
        cy={0}
        r={1}
        gradientUnits='userSpaceOnUse'
        gradientTransform='matrix(-110.5 159.00052 -168.48173 -117.08913 198.5 69.5)'>
        <Stop stopColor='#FFD5EE' />
        <Stop offset={1} stopColor='#E0667C' />
      </RadialGradient>
    </Defs>
  </Svg>
);

const OrangeP = () => (
  <Svg width={WIDTH} height={HEIGHT} viewBox='0 0 266 306' fill='none'>
    <Path
      d='M105.908 305.717c-10.383 0-16.14-9.874-16.14-24.875v-39.687h37.597v34.56c0 25.445-11.074 30.002-21.457 30.002zM.38 191.025s-.653 91.017 31.46 87.728c7.417-.76 12.913-12.913 12.913-31.901M161.734 305.717c10.383 0 16.14-9.874 16.14-24.875v-39.687h-37.598v34.56c0 25.445 11.075 30.002 21.458 30.002zM265.982 191.025s.653 91.017-31.46 87.728c-7.417-.76-12.913-12.913-12.913-31.901'
      fill='#DC525A'
    />
    <Path d='M132.616 59.228s5.575-44.866-50.901-42.356c0 0 4.227 61.493 50.901 42.356z' fill='#F27157' />
    <Path d='M135.339 61.791s62.99 20.9 75.583-61.117c0 0-89.737-11.567-75.583 61.117z' fill='#F27157' />
    <Path
      d='M265.602 178.872c-5.047-67.03-63.122-116.28-123.051-121.133-1.333-.106-2.639-.47-3.79-1.147-1.956-1.15-3.638-3.114-3.638-6.463 0-6.457 1.922-23.072 5.533-33.74.832-2.457-1.01-4.997-3.604-4.997h-8.359c-2.594 0-4.432 2.54-3.604 4.997 3.612 10.668 5.534 27.283 5.534 33.74 0 3.133-1.478 5.054-3.266 6.232-1.246.816-2.701 1.253-4.186 1.367C63.038 62.448 3.022 110.399.14 178.872c-2.617 62.162 31.6 83.551 97.78 83.551h69.898c66.179 0 102.451-21.511 97.78-83.551h.004z'
      fill='url(#paint0_radial_531_1915)'
    />
    <Path
      d='M235.6 186.168c0 40.324-30.629 53.578-83.931 54.984-2.502.064-35.429 0-37.977 0-56.841 0-83.93-12.768-83.93-54.984s52.788-79.833 102.919-79.833c54.307 0 102.919 37.617 102.919 79.833z'
      fill='#F9EFE3'
    />
    <Mask id='a' maskUnits='userSpaceOnUse' x={29} y={106} width={207} height={136}>
      <Path
        d='M235.599 186.168c0 40.324-30.629 53.578-83.931 54.984-2.502.064-35.429 0-37.977 0-56.84 0-83.93-12.768-83.93-54.984s52.788-79.833 102.919-79.833c54.307 0 102.919 37.617 102.919 79.833z'
        fill='#fff'
      />
    </Mask>
    <G mask='url(#a)'>
      <Path
        d='M57.106 236.219c14.682 0 26.584-11.902 26.584-26.584 0-14.683-11.902-26.585-26.584-26.585S30.52 194.952 30.52 209.635c0 14.682 11.903 26.584 26.585 26.584zM208.256 236.219c14.682 0 26.584-11.902 26.584-26.584 0-14.683-11.902-26.585-26.584-26.585s-26.584 11.902-26.584 26.585c0 14.682 11.902 26.584 26.584 26.584z'
        fill='#FDBD98'
      />
      <Path
        d='M45.496 213.269a.378.378 0 01-.27-.645l6.51-6.509a.378.378 0 11.535.535l-6.51 6.509a.373.373 0 01-.269.11h.004zM52.928 214.192a.377.377 0 01-.27-.645l8.355-8.355a.378.378 0 11.535.535l-8.355 8.355a.373.373 0 01-.27.11h.005zM62.206 213.269a.378.378 0 01-.27-.645l6.51-6.509a.378.378 0 11.535.535l-6.51 6.509a.373.373 0 01-.269.11h.004zM219.867 213.269a.39.39 0 01-.27-.11l-6.509-6.509a.379.379 0 01.535-.536l6.509 6.509a.377.377 0 01-.269.646h.004zM212.434 214.192a.39.39 0 01-.27-.11l-8.355-8.355a.379.379 0 01.536-.536l8.355 8.355a.379.379 0 01-.27.646h.004zM203.157 213.269a.39.39 0 01-.27-.11l-6.509-6.509a.379.379 0 01.535-.536l6.509 6.509a.377.377 0 01-.269.646h.004z'
        fill='#FFE8CA'
      />
      <G filter='url(#filter0_i_531_1915)'>
        <Path
          d='M235.6 186.168c0 40.324-30.629 53.578-83.931 54.984-2.502.064-35.429 0-37.977 0-56.841 0-83.93-12.768-83.93-54.984s52.788-79.833 102.919-79.833c54.307 0 102.919 37.617 102.919 79.833z'
          fill='#EDF6F9'
          fillOpacity={0.01}
        />
      </G>
    </G>
    <Path
      d='M82.687 205.457c10.906 0 19.748-8.842 19.748-19.749 0-10.906-8.842-19.748-19.748-19.748-10.907 0-19.748 8.842-19.748 19.748 0 10.907 8.841 19.749 19.748 19.749z'
      fill='#fff'
    />
    <Path
      d='M82.686 197.982c6.78 0 12.275-5.495 12.275-12.274 0-6.779-5.496-12.274-12.275-12.274s-12.274 5.495-12.274 12.274c0 6.779 5.495 12.274 12.274 12.274z'
      fill='#39393B'
    />
    <Path
      d='M182.67 205.457c10.907 0 19.748-8.842 19.748-19.749 0-10.906-8.841-19.748-19.748-19.748-10.907 0-19.748 8.842-19.748 19.748 0 10.907 8.841 19.749 19.748 19.749z'
      fill='#fff'
    />
    <Path
      d='M182.67 197.982c6.779 0 12.274-5.495 12.274-12.274 0-6.779-5.495-12.274-12.274-12.274-6.779 0-12.274 5.495-12.274 12.274 0 6.779 5.495 12.274 12.274 12.274z'
      fill='#39393B'
    />
    <Path
      d='M132.682 208.114c-5.397 0-10.368-2.02-13.999-5.689-3.706-3.744-5.749-9.008-5.749-14.818a9.493 9.493 0 019.494-9.495 9.493 9.493 0 019.494 9.495c0 .862.171 1.314.247 1.447.057.022.217.072.513.072.296 0 .456-.05.513-.072.079-.133.246-.585.246-1.447a9.494 9.494 0 019.495-9.495 9.493 9.493 0 019.494 9.495c0 5.81-2.043 11.074-5.75 14.818-3.63 3.669-8.602 5.689-13.998 5.689z'
      fill='#F27358'
    />
    <Path
      d='M132.682 199c-6.362 0-10.634-4.58-10.634-11.393a.38.38 0 01.759 0c0 6.361 3.969 10.634 9.875 10.634 5.905 0 9.874-4.273 9.874-10.634a.38.38 0 01.379-.38c.209 0 .38.171.38.38 0 6.813-4.272 11.393-10.633 11.393z'
      fill='#000'
    />
    <Path
      d='M62.387 157.306l-3.49 3.491a4.937 4.937 0 006.981 6.982l3.491-3.491a4.937 4.937 0 10-6.982-6.982zM202.975 157.304a4.937 4.937 0 00-6.982 6.982l3.491 3.491a4.937 4.937 0 006.982-6.982l-3.491-3.491z'
      fill='#39393B'
    />
    <Defs>
      <RadialGradient
        id='paint0_radial_531_1915'
        cx={0}
        cy={0}
        r={1}
        gradientUnits='userSpaceOnUse'
        gradientTransform='matrix(-110.5 159.00052 -168.48173 -117.08913 198.5 69.5)'>
        <Stop stopColor='#F9D48C' />
        <Stop offset={1} stopColor='#F27157' />
      </RadialGradient>
    </Defs>
  </Svg>
);

const BlueP = () => (
  <Svg width={WIDTH} height={HEIGHT} viewBox='0 0 266 306' fill='none'>
    <Path
      d='M105.908 305.717c-10.383 0-16.14-9.874-16.14-24.875v-39.687h37.597v34.56c0 25.445-11.074 30.002-21.457 30.002zM.38 191.025s-.653 91.017 31.46 87.728c7.417-.76 12.913-12.913 12.913-31.901M161.734 305.717c10.383 0 16.14-9.874 16.14-24.875v-39.687h-37.598v34.56c0 25.445 11.075 30.002 21.458 30.002zM265.982 191.025s.653 91.017-31.46 87.728c-7.417-.76-12.913-12.913-12.913-31.901M132.616 59.228s5.575-44.866-50.901-42.356c0 0 4.227 61.493 50.901 42.356z'
      fill='#4287C8'
    />
    <Path d='M135.339 61.791s62.99 20.9 75.583-61.117c0 0-89.737-11.567-75.583 61.117z' fill='#4287C8' />
    <Path
      d='M265.602 178.872c-5.047-67.03-63.122-116.28-123.051-121.133-1.333-.106-2.639-.47-3.79-1.147-1.956-1.15-3.638-3.114-3.638-6.463 0-6.457 1.922-23.072 5.533-33.74.832-2.457-1.01-4.997-3.604-4.997h-8.359c-2.594 0-4.432 2.54-3.604 4.997 3.612 10.668 5.534 27.283 5.534 33.74 0 3.133-1.478 5.054-3.266 6.232-1.246.816-2.701 1.253-4.186 1.367C63.038 62.448 3.022 110.399.14 178.872c-2.617 62.162 31.6 83.551 97.78 83.551h69.898c66.179 0 102.451-21.511 97.78-83.551h.004z'
      fill='url(#paint0_radial_531_1876)'
    />
    <Path
      d='M235.6 186.168c0 40.324-30.629 53.578-83.931 54.984-2.502.064-35.429 0-37.977 0-56.841 0-83.93-12.768-83.93-54.984s52.788-79.833 102.919-79.833c54.307 0 102.919 37.617 102.919 79.833z'
      fill='#EEFBFF'
    />
    <Mask id='a' maskUnits='userSpaceOnUse' x={29} y={106} width={207} height={136}>
      <Path
        d='M235.599 186.168c0 40.324-30.629 53.578-83.931 54.984-2.502.064-35.429 0-37.977 0-56.84 0-83.93-12.768-83.93-54.984s52.788-79.833 102.919-79.833c54.307 0 102.919 37.617 102.919 79.833z'
        fill='#fff'
      />
    </Mask>
    <G mask='url(#a)'>
      <Path
        d='M57.106 236.219c14.682 0 26.584-11.902 26.584-26.584 0-14.683-11.902-26.585-26.584-26.585S30.52 194.952 30.52 209.635c0 14.682 11.903 26.584 26.585 26.584zM208.256 236.219c14.682 0 26.584-11.902 26.584-26.584 0-14.683-11.902-26.585-26.584-26.585s-26.584 11.902-26.584 26.585c0 14.682 11.902 26.584 26.584 26.584z'
        fill='#C9D9FC'
      />
      <Path
        d='M45.496 213.269a.378.378 0 01-.27-.645l6.51-6.509a.378.378 0 11.535.535l-6.51 6.509a.373.373 0 01-.269.11h.004zM52.928 214.192a.377.377 0 01-.27-.645l8.355-8.355a.378.378 0 11.535.535l-8.355 8.355a.373.373 0 01-.27.11h.005zM62.206 213.269a.378.378 0 01-.27-.645l6.51-6.509a.378.378 0 11.535.535l-6.51 6.509a.373.373 0 01-.269.11h.004zM219.867 213.269a.39.39 0 01-.27-.11l-6.509-6.509a.379.379 0 01.535-.536l6.509 6.509a.377.377 0 01-.269.646h.004zM212.434 214.192a.39.39 0 01-.27-.11l-8.355-8.355a.379.379 0 01.536-.536l8.355 8.355a.379.379 0 01-.27.646h.004zM203.157 213.269a.39.39 0 01-.27-.11l-6.509-6.509a.379.379 0 01.535-.536l6.509 6.509a.377.377 0 01-.269.646h.004z'
        fill='#EDF6F9'
      />
    </G>
    <Path
      d='M82.687 205.457c10.906 0 19.748-8.842 19.748-19.749 0-10.906-8.842-19.748-19.748-19.748-10.907 0-19.748 8.842-19.748 19.748 0 10.907 8.841 19.749 19.748 19.749z'
      fill='#fff'
    />
    <Path
      d='M82.686 197.982c6.78 0 12.275-5.495 12.275-12.274 0-6.779-5.496-12.274-12.275-12.274s-12.274 5.495-12.274 12.274c0 6.779 5.495 12.274 12.274 12.274z'
      fill='#39393B'
    />
    <Path
      d='M182.67 205.457c10.907 0 19.748-8.842 19.748-19.749 0-10.906-8.841-19.748-19.748-19.748-10.907 0-19.748 8.842-19.748 19.748 0 10.907 8.841 19.749 19.748 19.749z'
      fill='#fff'
    />
    <Path
      d='M182.67 197.982c6.779 0 12.274-5.495 12.274-12.274 0-6.779-5.495-12.274-12.274-12.274-6.779 0-12.274 5.495-12.274 12.274 0 6.779 5.495 12.274 12.274 12.274z'
      fill='#39393B'
    />
    <Path
      d='M132.682 208.114c-5.397 0-10.368-2.02-13.999-5.689-3.706-3.744-5.749-9.008-5.749-14.818a9.493 9.493 0 019.494-9.495 9.493 9.493 0 019.494 9.495c0 .862.171 1.314.247 1.447.057.022.217.072.513.072.296 0 .456-.05.513-.072.079-.133.246-.585.246-1.447a9.494 9.494 0 019.495-9.495 9.493 9.493 0 019.494 9.495c0 5.81-2.043 11.074-5.75 14.818-3.63 3.669-8.602 5.689-13.998 5.689z'
      fill='#FE91A5'
    />
    <Path
      d='M132.682 199c-6.362 0-10.634-4.58-10.634-11.393a.38.38 0 01.759 0c0 6.361 3.969 10.634 9.875 10.634 5.905 0 9.874-4.273 9.874-10.634a.38.38 0 01.379-.38c.209 0 .38.171.38.38 0 6.813-4.272 11.393-10.633 11.393z'
      fill='#000'
    />
    <Path
      d='M62.387 157.306l-3.49 3.491a4.937 4.937 0 006.981 6.982l3.491-3.491a4.937 4.937 0 10-6.982-6.982zM202.975 157.304a4.937 4.937 0 00-6.982 6.982l3.491 3.491a4.937 4.937 0 006.982-6.982l-3.491-3.491z'
      fill='#39393B'
    />
    <Defs>
      <RadialGradient
        id='paint0_radial_531_1876'
        cx={0}
        cy={0}
        r={1}
        gradientUnits='userSpaceOnUse'
        gradientTransform='matrix(-110.5 159.00052 -168.48173 -117.08913 198.5 69.5)'>
        <Stop stopColor='#D5DEFF' />
        <Stop offset={1} stopColor='#599EDE' />
      </RadialGradient>
    </Defs>
  </Svg>
);

const GreenP = () => (
  <Svg width={WIDTH} height={HEIGHT} viewBox='0 0 266 306' fill='none'>
    <Path
      d='M105.908 305.717c-10.383 0-16.14-9.874-16.14-24.875v-39.687h37.597v34.56c0 25.445-11.074 30.002-21.457 30.002zM.38 191.025s-.653 91.017 31.46 87.728c7.417-.76 12.913-12.913 12.913-31.901M161.734 305.717c10.383 0 16.14-9.874 16.14-24.875v-39.687h-37.598v34.56c0 25.445 11.075 30.002 21.458 30.002zM265.982 191.025s.653 91.017-31.46 87.728c-7.417-.76-12.913-12.913-12.913-31.901'
      fill='#29544A'
    />
    <Path d='M132.616 59.228s5.575-44.866-50.901-42.356c0 0 4.227 61.493 50.901 42.356z' fill='#295444' />
    <Path d='M135.339 61.791s62.99 20.9 75.583-61.117c0 0-89.737-11.567-75.583 61.117z' fill='#295444' />
    <Path
      d='M265.602 178.872c-5.047-67.03-63.122-116.28-123.051-121.133-1.333-.106-2.639-.47-3.79-1.147-1.956-1.15-3.638-3.114-3.638-6.463 0-6.457 1.922-23.072 5.533-33.74.832-2.457-1.01-4.997-3.604-4.997h-8.359c-2.594 0-4.432 2.54-3.604 4.997 3.612 10.668 5.534 27.283 5.534 33.74 0 3.133-1.478 5.054-3.266 6.232-1.246.816-2.701 1.253-4.186 1.367C63.038 62.448 3.022 110.399.14 178.872c-2.617 62.162 31.6 83.551 97.78 83.551h69.898c66.179 0 102.451-21.511 97.78-83.551h.004z'
      fill='url(#paint0_radial_531_1917)'
    />
    <Path
      d='M235.6 186.168c0 40.324-30.629 53.578-83.931 54.984-2.502.064-35.429 0-37.977 0-56.841 0-83.93-12.768-83.93-54.984s52.788-79.833 102.919-79.833c54.307 0 102.919 37.617 102.919 79.833z'
      fill='#D6EBDD'
    />
    <Mask id='a' maskUnits='userSpaceOnUse' x={29} y={106} width={207} height={136}>
      <Path
        d='M235.599 186.168c0 40.324-30.629 53.578-83.931 54.984-2.502.064-35.429 0-37.977 0-56.84 0-83.93-12.768-83.93-54.984s52.788-79.833 102.919-79.833c54.307 0 102.919 37.617 102.919 79.833z'
        fill='#fff'
      />
    </Mask>
    <G mask='url(#a)'>
      <Path
        d='M57.106 236.219c14.682 0 26.584-11.902 26.584-26.584 0-14.683-11.902-26.585-26.584-26.585S30.52 194.952 30.52 209.635c0 14.682 11.903 26.584 26.585 26.584zM208.256 236.219c14.682 0 26.584-11.902 26.584-26.584 0-14.683-11.902-26.585-26.584-26.585s-26.584 11.902-26.584 26.585c0 14.682 11.902 26.584 26.584 26.584z'
        fill='#A8D9B8'
      />
      <Path
        d='M45.496 213.269a.378.378 0 01-.27-.645l6.51-6.509a.378.378 0 11.535.535l-6.51 6.509a.373.373 0 01-.269.11h.004zM52.928 214.192a.377.377 0 01-.27-.645l8.355-8.355a.378.378 0 11.535.535l-8.355 8.355a.373.373 0 01-.27.11h.005zM62.206 213.269a.378.378 0 01-.27-.645l6.51-6.509a.378.378 0 11.535.535l-6.51 6.509a.373.373 0 01-.269.11h.004zM219.867 213.269a.39.39 0 01-.27-.11l-6.509-6.509a.379.379 0 01.535-.536l6.509 6.509a.377.377 0 01-.269.646h.004zM212.434 214.192a.39.39 0 01-.27-.11l-8.355-8.355a.379.379 0 01.536-.536l8.355 8.355a.379.379 0 01-.27.646h.004zM203.157 213.269a.39.39 0 01-.27-.11l-6.509-6.509a.379.379 0 01.535-.536l6.509 6.509a.377.377 0 01-.269.646h.004z'
        fill='#D5F1E4'
      />
    </G>
    <G filter='url(#filter0_i_531_1917)'>
      <Path
        d='M235.6 186.168c0 40.324-30.629 53.578-83.931 54.984-2.502.064-35.429 0-37.977 0-56.841 0-83.93-12.768-83.93-54.984s52.788-79.833 102.919-79.833c54.307 0 102.919 37.617 102.919 79.833z'
        fill='#F2F9ED'
        fillOpacity={0.01}
      />
    </G>
    <Path
      d='M82.687 205.457c10.906 0 19.748-8.842 19.748-19.749 0-10.906-8.842-19.748-19.748-19.748-10.907 0-19.748 8.842-19.748 19.748 0 10.907 8.841 19.749 19.748 19.749z'
      fill='#fff'
    />
    <Path
      d='M82.686 197.982c6.78 0 12.275-5.495 12.275-12.274 0-6.779-5.496-12.274-12.275-12.274s-12.274 5.495-12.274 12.274c0 6.779 5.495 12.274 12.274 12.274z'
      fill='#39393B'
    />
    <Path
      d='M182.67 205.457c10.907 0 19.748-8.842 19.748-19.749 0-10.906-8.841-19.748-19.748-19.748-10.907 0-19.748 8.842-19.748 19.748 0 10.907 8.841 19.749 19.748 19.749z'
      fill='#fff'
    />
    <Path
      d='M182.67 197.982c6.779 0 12.274-5.495 12.274-12.274 0-6.779-5.495-12.274-12.274-12.274-6.779 0-12.274 5.495-12.274 12.274 0 6.779 5.495 12.274 12.274 12.274z'
      fill='#39393B'
    />
    <Path
      d='M132.682 208.114c-5.397 0-10.368-2.02-13.999-5.689-3.706-3.744-5.749-9.008-5.749-14.818a9.493 9.493 0 019.494-9.495 9.493 9.493 0 019.494 9.495c0 .862.171 1.314.247 1.447.057.022.217.072.513.072.296 0 .456-.05.513-.072.079-.133.246-.585.246-1.447a9.494 9.494 0 019.495-9.495 9.493 9.493 0 019.494 9.495c0 5.81-2.043 11.074-5.75 14.818-3.63 3.669-8.602 5.689-13.998 5.689z'
      fill='#EE868C'
    />
    <Path
      d='M132.682 199c-6.362 0-10.634-4.58-10.634-11.393a.38.38 0 01.759 0c0 6.361 3.969 10.634 9.875 10.634 5.905 0 9.874-4.273 9.874-10.634a.38.38 0 01.379-.38c.209 0 .38.171.38.38 0 6.813-4.272 11.393-10.633 11.393z'
      fill='#000'
    />
    <Path
      d='M62.387 157.306l-3.49 3.491a4.937 4.937 0 006.981 6.982l3.491-3.491a4.937 4.937 0 10-6.982-6.982zM202.975 157.304a4.937 4.937 0 00-6.982 6.982l3.491 3.491a4.937 4.937 0 006.982-6.982l-3.491-3.491z'
      fill='#39393B'
    />
    <Defs>
      <RadialGradient
        id='paint0_radial_531_1917'
        cx={0}
        cy={0}
        r={1}
        gradientUnits='userSpaceOnUse'
        gradientTransform='matrix(-110.5 159.00052 -168.48173 -117.08913 198.5 69.5)'>
        <Stop stopColor='#A1E6B4' />
        <Stop offset={1} stopColor='#2B7362' />
      </RadialGradient>
    </Defs>
  </Svg>
);

const colorMap = {
  [PetColors.GREEN]: GreenP,
  [PetColors.YELLOW]: YellowP,
  [PetColors.ORANGE]: OrangeP,
  [PetColors.BLUE]: BlueP,
  [PetColors.PINK]: PinkP,
};

const Pet = ({ color = PetColors.GREEN }: Props) => {
  const component = colorMap[color];
  return <>{component()}</>;
};

export default Pet;
