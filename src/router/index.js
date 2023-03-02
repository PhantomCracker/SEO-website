import Vue from 'vue';
import Router from 'vue-router';

// import components/pages
import DefaultLayout from '@/layouts/DefaultLayout';
import Home from '@/pages/Home';
import About from '../pages/About';
import LocksmithNearMe from "../pages/LocksmithNearMe";
// import Cities from "../pages/Cities";
// import Bristol from "../components/locksmith-near-me/Bristol";

import BirminghamCity from "@/pages/BirminghamCity";
import BoltonCity from "@/pages/BoltonCity";
import BradfordCity from "@/pages/BradfordCity";
import BrightonCity from "@/pages/BrightonCity";
import BristolCity from "@/pages/BristolCity";
import BromleyCity from "@/pages/BromleyCity";
import CambridgeCity from "@/pages/CambridgeCity";
import ChelmsfordCity from "@/pages/ChelmsfordCity";
import ChesterCity from "@/pages/ChesterCity";
import ColchesterCity from "@/pages/ColchesterCity";
import CoventryCity from "@/pages/CoventryCity";
import CreweCity from "@/pages/CreweCity";
import CroydonCity from "@/pages/CroydonCity";
import DarlingtonCity from "@/pages/DarlingtonCity";
import DartfordCity from "@/pages/DartfordCity";
import DerbyCity from "@/pages/DerbyCity";
import DoncasterCity from "@/pages/DoncasterCity";
import DudleyCity from "@/pages/DudleyCity";
import DurhamCity from "@/pages/DurhamCity";
import EnfieldCity from "@/pages/EnfieldCity";
import GloucesterCity from "@/pages/GloucesterCity";
import GuildfordCity from "@/pages/GuildfordCity";
import HarrowCity from "@/pages/HarrowCity";
import HemelCity from "@/pages/HemelCity";
import HuddersfieldCity from "@/pages/HuddersfieldCity";
import IlfordCity from "@/pages/IlfordCity";
import IpswichCity from "@/pages/IpswichCity";
import KingstonCity from "@/pages/KingstonCity";
import LeedsCity from "@/pages/LeedsCity";
import LeicesterCity from "@/pages/LeicesterCity";
import LiverpoolCity from "@/pages/LiverpoolCity";
import LutonCity from "@/pages/LutonCity";
import ManchesterCity from "@/pages/ManchesterCity";
import MiddlesbroughCity from "@/pages/MiddlesbroughCity";
import MiltonCity from "@/pages/MiltonCity";
import NewcastleCity from "@/pages/NewcastleCity";
import NorthamptonCity from "@/pages/NorthamptonCity";
import NorwichCity from "@/pages/NorwichCity";
import NottinghamCity from "@/pages/NottinghamCity";
import OldhamCity from "@/pages/OldhamCity";
import OxfordCity from "@/pages/OxfordCity";
import PeterboroughCity from "@/pages/PeterboroughCity";
import ReadingCity from "@/pages/ReadingCity";
import RedhillCity from "@/pages/RedhillCity";
import RomfordCity from "@/pages/RomfordCity";
import SheffieldCity from "@/pages/SheffieldCity";
import SloughCity from "@/pages/SloughCity";
import StAlbansCity from "@/pages/StAlbansCity";
import StevenageCity from "@/pages/StevenageCity";
import StockportCity from "@/pages/StockportCity";
import StokeCity from "@/pages/StokeCity";
import SunderlandCity from "@/pages/SunderlandCity";
import SwindonCity from "@/pages/SwindonCity";
import TwickenhamCity from "@/pages/TwickenhamCity";
import UxbridgeCity from "@/pages/UxbridgeCity";
import WakefieldCity from "@/pages/WakefieldCity";
import WarringtonCity from "@/pages/WarringtonCity";
import WatfordCity from "@/pages/WatfordCity";
import WiganCity from "@/pages/WiganCity";
import WolverhamptonCity from "@/pages/WolverhamptonCity";
import BlackburnCity from "@/pages/BlackburnCity";
import PrestonCity from "@/pages/PrestonCity";

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: DefaultLayout,
            children: [
                {
                    path: '/',
                    name: 'Home',
                    component: Home
                },
                {
                    path: '/about-us',
                    name: 'About',
                    component: About
                },
                {
                    path: '/locksmith-near-me',
                    name: 'LocksmithNearMe',
                    component: LocksmithNearMe,

                },
                // {
                //     path: '/locksmith/:city',
                //     name: 'Cities',
                //     component: Cities,
                // },


                {
                    path:'/Birmingham',
                    name: 'BirminghamCity',
                    component: BirminghamCity
                },
                {
                    path:'/Bolton',
                    name: 'BoltonCity',
                    component: BoltonCity
                },
                {
                    path:'/Bradford',
                    name: 'BradfordCity',
                    component: BradfordCity
                },
                {
                    path:'/Brighton',
                    name: 'BrightonCity',
                    component: BrightonCity
                },
                {
                    path:'/Bristol',
                    name: 'BristolCity',
                    component: BristolCity
                },
                {
                    path:'/Bromley',
                    name: 'BromleyCity',
                    component: BromleyCity
                },
                {
                    path:'/Blackburn',
                    name: 'BlackburnCity',
                    component: BlackburnCity
                },
                {
                    path:'/Cambridge',
                    name: 'CambridgeCity',
                    component: CambridgeCity
                },
                {
                    path:'/Chelmsford',
                    name: 'ChelmsfordCity',
                    component: ChelmsfordCity
                },
                {
                    path:'/Chester',
                    name: 'ChesterCity',
                    component: ChesterCity
                },
                {
                    path:'/Colchester',
                    name: 'ColchesterCity',
                    component: ColchesterCity
                },
                {
                    path:'/Coventry',
                    name: 'CoventryCity',
                    component: CoventryCity
                },
                {
                    path:'/Crewe',
                    name: 'CreweCity',
                    component: CreweCity
                },
                {
                    path:'/Croydon',
                    name: 'CroydonCity',
                    component: CroydonCity
                },
                {
                    path:'/Darlington',
                    name: 'DarlingtonCity',
                    component: DarlingtonCity
                },
                {
                    path:'/Dartford',
                    name: 'DartfordCity',
                    component: DartfordCity
                },
                {
                    path:'/Derby',
                    name: 'DerbyCity',
                    component: DerbyCity
                },
                {
                    path:'/Doncaster',
                    name: 'DoncasterCity',
                    component: DoncasterCity
                },
                {
                    path:'/Dudley',
                    name: 'DudleyCity',
                    component: DudleyCity
                },
                {
                    path:'/Durham',
                    name: 'DurhamCity',
                    component: DurhamCity
                },
                {
                    path:'/Enfield',
                    name: 'EnfieldCity',
                    component: EnfieldCity
                },
                {
                    path:'/Gloucester',
                    name: 'GloucesterCity',
                    component: GloucesterCity
                },
                {
                    path:'/Guildford',
                    name: 'GuildfordCity',
                    component: GuildfordCity
                },
                {
                    path:'/Harrow',
                    name: 'HarrowCity',
                    component: HarrowCity
                },
                {
                    path:'/Hemel',
                    name: 'HemelCity',
                    component: HemelCity
                },
                {
                    path:'/Huddersfield',
                    name: 'HuddersfieldCity',
                    component: HuddersfieldCity
                },
                {
                    path:'/Ilford',
                    name: 'IlfordCity',
                    component: IlfordCity
                },
                {
                    path:'/Ipswich',
                    name: 'IpswichCity',
                    component: IpswichCity
                },
                {
                    path:'/Kingston',
                    name: 'KingstonCity',
                    component: KingstonCity
                },
                {
                    path:'/Leeds',
                    name: 'LeedsCity',
                    component: LeedsCity
                },
                {
                    path:'/Leicester',
                    name: 'LeicesterCity',
                    component: LeicesterCity
                },
                {
                    path:'/Liverpool',
                    name: 'LiverpoolCity',
                    component: LiverpoolCity
                },
                {
                    path:'/Luton',
                    name: 'LutonCity',
                    component: LutonCity
                },
                {
                    path:'/Manchester',
                    name: 'ManchesterCity',
                    component: ManchesterCity
                },
                {
                    path:'/Middlesbrough',
                    name: 'MiddlesbroughCity',
                    component: MiddlesbroughCity
                },
                {
                    path:'/Milton',
                    name: 'MiltonCity',
                    component: MiltonCity
                },
                {
                    path:'/Newcastle',
                    name: 'NewcastleCity',
                    component: NewcastleCity
                },
                {
                    path:'/Northampton',
                    name: 'NorthamptonCity',
                    component: NorthamptonCity
                },
                {
                    path:'/Norwich',
                    name: 'NorwichCity',
                    component: NorwichCity
                },
                {
                    path:'/Nottingham',
                    name: 'NottinghamCity',
                    component: NottinghamCity
                },
                {
                    path:'/Oldham',
                    name: 'OldhamCity',
                    component: OldhamCity
                },
                {
                    path:'/Oxford',
                    name: 'OxfordCity',
                    component: OxfordCity
                },
                {
                    path:'/Peterborough',
                    name: 'PeterboroughCity',
                    component: PeterboroughCity
                },
                {
                    path:'/Preston',
                    name: 'PrestonCity',
                    component: PrestonCity
                },
                {
                    path:'/Reading',
                    name: 'ReadingCity',
                    component: ReadingCity
                },
                {
                    path:'/Redhill',
                    name: 'RedhillCity',
                    component: RedhillCity
                },
                {
                    path:'/Romford',
                    name: 'RomfordCity',
                    component: RomfordCity
                },
                {
                    path:'/Sheffield',
                    name: 'SheffieldCity',
                    component: SheffieldCity
                },
                {
                    path:'/Slough',
                    name: 'SloughCity',
                    component: SloughCity
                },
                {
                    path:'/StAlbans',
                    name: 'StAlbansCity',
                    component: StAlbansCity
                },
                {
                    path:'/Stevenage',
                    name: 'StevenageCity',
                    component: StevenageCity
                },
                {
                    path:'/Stockport',
                    name: 'StockportCity',
                    component: StockportCity
                },
                {
                    path:'/Stoke',
                    name: 'StokeCity',
                    component: StokeCity
                },
                {
                    path:'/Sunderland',
                    name: 'SunderlandCity',
                    component: SunderlandCity
                },
                {
                    path:'/Swindon',
                    name: 'SwindonCity',
                    component: SwindonCity
                },
                {
                    path:'/Twickenham',
                    name: 'TwickenhamCity',
                    component: TwickenhamCity
                },
                {
                    path:'/Uxbridge',
                    name: 'UxbridgeCity',
                    component: UxbridgeCity
                },
                {
                    path:'/Wakefield',
                    name: 'WakefieldCity',
                    component: WakefieldCity
                },
                {
                    path:'/Warrington',
                    name: 'WarringtonCity',
                    component: WarringtonCity
                },
                {
                    path:'/Watford',
                    name: 'WatfordCity',
                    component: WatfordCity
                },
                {
                    path:'/Wigan',
                    name: 'WiganCity',
                    component: WiganCity
                },
                {
                    path:'/Wolverhampton',
                    name: 'WolverhamptonCity',
                    component: WolverhamptonCity
                }
            ]
        }
    ],
    scrollBehavior() {
        document.getElementById('app').scrollIntoView();
    }
});