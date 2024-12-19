import Svg, { Ellipse, Path } from "react-native-svg";

const Logo = ({ fill = "#F9302C" }: { fill: string }) => {
  return (
    <Svg width="60" height="18" viewBox="0 0 60 18" fill="none">
      <Path d="M59.9999 17.751H57.0693V1.30194H59.9999V17.751Z" fill={fill} />
      <Path
        d="M52.2559 12.2975C51.9846 12.3082 51.5396 12.335 50.9209 12.3778C50.3022 12.4153 49.7758 12.4528 49.3417 12.4903C48.6199 12.5438 48.0582 12.7178 47.6566 13.0123C47.2604 13.3068 47.0623 13.7191 47.0623 14.2492C47.0623 14.5973 47.1519 14.8918 47.331 15.1327C47.5101 15.3737 47.757 15.5584 48.0718 15.6869C48.3919 15.8101 48.7583 15.8716 49.1707 15.8716C49.7514 15.8716 50.2642 15.7565 50.7092 15.5263C51.1542 15.2907 51.4961 14.9801 51.7349 14.5946C51.9737 14.2091 52.0931 13.7861 52.0931 13.3256L52.0768 9.38198C52.0768 8.97504 51.99 8.62967 51.8163 8.34588C51.6427 8.05674 51.3876 7.83721 51.0511 7.68728C50.7147 7.53736 50.3022 7.46239 49.8138 7.46239C49.3851 7.46239 49.0106 7.52397 48.6904 7.64712C48.3702 7.76492 48.107 7.93359 47.9008 8.15312C47.6946 8.37266 47.5562 8.63235 47.4856 8.9322H44.6447C44.7152 8.22541 44.9703 7.59358 45.4098 7.03671C45.8494 6.47984 46.4518 6.04345 47.217 5.72754C47.9822 5.41162 48.8749 5.25366 49.8952 5.25366C50.7798 5.25366 51.602 5.38752 52.3617 5.65525C53.1269 5.92297 53.7565 6.37543 54.2503 7.01261C54.7496 7.64445 54.9992 8.47439 54.9992 9.50246V17.7511H52.1908V16.0564H52.0931C51.9032 16.4258 51.6427 16.7551 51.3116 17.0443C50.986 17.3281 50.579 17.5583 50.0906 17.735C49.6021 17.9117 49.0459 18 48.4218 18C47.6132 18 46.8914 17.8582 46.2564 17.5744C45.6269 17.2906 45.1304 16.8702 44.7668 16.3134C44.4086 15.7512 44.2295 15.0765 44.2295 14.2894C44.2295 13.015 44.6609 12.0967 45.5238 11.5345C46.3921 10.9669 47.5128 10.6349 48.8858 10.5386C49.244 10.5171 49.6781 10.493 50.1883 10.4663C50.7038 10.4395 51.1787 10.4154 51.6128 10.394C51.8787 10.3833 52.085 10.3752 52.2315 10.3699L52.2559 12.2975Z"
        fill={fill}
      />
      <Path d="M39.7666 5.41431H42.6971V17.7511H39.7666V5.41431Z" fill={fill} />
      <Path
        d="M32.8981 17.992C31.6716 17.992 30.6052 17.7243 29.6989 17.1888C28.798 16.6534 28.1061 15.9064 27.6231 14.948C27.1455 13.9842 26.9067 12.8785 26.9067 11.6309C26.9067 10.3833 27.151 9.27757 27.6394 8.31376C28.1278 7.34459 28.8224 6.59229 29.7233 6.05684C30.6242 5.52139 31.6743 5.25366 32.8736 5.25366C33.8776 5.25366 34.7731 5.43572 35.56 5.79982C36.3523 6.16393 36.9791 6.68064 37.4404 7.34995C37.9071 8.01926 38.173 8.79299 38.2382 9.67112H35.446C35.3646 9.26954 35.2126 8.91078 34.9901 8.59487C34.7731 8.2736 34.4881 8.02461 34.1354 7.84792C33.7881 7.67122 33.3838 7.58287 32.9225 7.58287C32.3147 7.58287 31.7801 7.7435 31.3188 8.06477C30.863 8.38604 30.5075 8.84921 30.2524 9.45427C29.9974 10.054 29.8698 10.7634 29.8698 11.5827C29.8698 12.418 29.9947 13.1408 30.2443 13.7513C30.4994 14.3563 30.8548 14.8222 31.3107 15.1488C31.7665 15.47 32.3038 15.6307 32.9225 15.6307C33.3566 15.6307 33.7474 15.5504 34.0947 15.3897C34.442 15.2237 34.7324 14.9855 34.9657 14.6749C35.1991 14.3643 35.3592 13.9895 35.446 13.5505H38.2382C38.1676 14.4232 37.9071 15.1943 37.4567 15.8636C37.0062 16.5329 36.3903 17.055 35.6088 17.4298C34.8273 17.8046 33.9237 17.992 32.8981 17.992Z"
        fill={fill}
      />
      <Path
        d="M19.8839 17.992C18.6791 17.992 17.6236 17.727 16.7173 17.1969C15.8164 16.6668 15.1191 15.9225 14.6252 14.964C14.1368 14.0056 13.8926 12.8945 13.8926 11.6309C13.8926 10.3672 14.1368 9.25347 14.6252 8.28966C15.1191 7.32585 15.8164 6.5789 16.7173 6.04881C17.6236 5.51871 18.6791 5.25366 19.8839 5.25366C21.0887 5.25366 22.1415 5.51871 23.0424 6.04881C23.9487 6.5789 24.646 7.32585 25.1344 8.28966C25.6229 9.25347 25.8671 10.3672 25.8671 11.6309C25.8671 12.8945 25.6229 14.0056 25.1344 14.964C24.646 15.9225 23.9487 16.6668 23.0424 17.1969C22.1415 17.727 21.0887 17.992 19.8839 17.992ZM19.892 15.6789C20.5433 15.6789 21.0941 15.5022 21.5445 15.1488C21.995 14.79 22.3314 14.3054 22.5539 13.695C22.7819 13.0793 22.8958 12.3885 22.8958 11.6228C22.8958 10.8518 22.7819 10.1584 22.5539 9.54262C22.3314 8.92685 21.995 8.43959 21.5445 8.08084C21.0941 7.72209 20.5433 7.54271 19.892 7.54271C19.2354 7.54271 18.6791 7.72209 18.2233 8.08084C17.7728 8.43959 17.4309 8.92685 17.1976 9.54262C16.9696 10.1584 16.8557 10.8518 16.8557 11.6228C16.8557 12.3939 16.9696 13.0846 17.1976 13.695C17.4309 14.3054 17.7728 14.79 18.2233 15.1488C18.6791 15.5022 19.2354 15.6789 19.892 15.6789Z"
        fill={fill}
      />
      <Path
        d="M9.66263 5.82385C9.61379 5.35265 9.4537 4.95107 9.18235 4.61909C8.91643 4.28176 8.55554 4.02742 8.09968 3.85607C7.64382 3.67937 7.11469 3.59103 6.5123 3.59103C5.89364 3.59103 5.35637 3.68205 4.90051 3.8641C4.44465 4.04616 4.09461 4.30317 3.8504 4.63515C3.60619 4.96178 3.48408 5.33124 3.48408 5.74353C3.47323 6.36466 3.73101 6.84924 4.25742 7.19728C4.78383 7.53997 5.47305 7.81305 6.32508 8.01652L7.88803 8.40204C8.82689 8.62693 9.65449 8.92678 10.3708 9.3016C11.0926 9.67106 11.6733 10.1744 12.1129 10.8116C12.5579 11.4488 12.7804 12.2225 12.7804 13.1327C12.7804 14.0966 12.528 14.9452 12.0233 15.6788C11.5241 16.4124 10.7996 16.9826 9.84986 17.3896C8.90558 17.7965 7.77678 18 6.46346 18C5.17185 18 4.0512 17.8019 3.10148 17.4056C2.15177 17.0094 1.40829 16.4311 0.871021 15.6708C0.333756 14.9051 0.0434154 13.9841 0 12.9079H2.94682C2.99023 13.4647 3.16661 13.9359 3.47594 14.3214C3.7907 14.7016 4.20315 14.9881 4.71328 15.1808C5.22341 15.3736 5.79866 15.47 6.43904 15.47C7.09027 15.47 7.67095 15.3709 8.18108 15.1728C8.69121 14.9747 9.08467 14.6989 9.36144 14.3455C9.63821 13.9868 9.77931 13.5745 9.78474 13.1086C9.77931 12.7017 9.6572 12.3563 9.41842 12.0726C9.17964 11.7834 8.84588 11.5451 8.41715 11.3577C7.98843 11.1703 7.44302 10.9909 6.78094 10.8196L4.88423 10.3377C3.45152 9.97359 2.35257 9.43278 1.58737 8.71528C0.822179 7.99778 0.442294 7.06609 0.447721 5.92023C0.442294 4.97249 0.7055 4.13183 1.23734 3.39826C1.76918 2.6647 2.49638 2.09444 3.41896 1.6875C4.34696 1.28056 5.39165 1.07709 6.55301 1.07709C7.71979 1.07709 8.75362 1.27788 9.65449 1.67947C10.5608 2.08106 11.2663 2.64328 11.771 3.36614C12.2757 4.08364 12.5362 4.90288 12.5525 5.82385H9.66263Z"
        fill={fill}
      />
      <Path
        d="M40.8584 4.17937V3.6726L42.5718 3.20624L41.3691 4.39292C41.1795 4.57996 40.8584 4.44567 40.8584 4.17937Z"
        fill={fill}
      />
      <Ellipse
        cx="41.2711"
        cy="1.86546"
        rx="1.89069"
        ry="1.86546"
        fill={fill}
      />
    </Svg>
  );
};

export default Logo;
