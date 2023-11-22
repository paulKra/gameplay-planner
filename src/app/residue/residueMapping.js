import AttackImg from '../../../public/images/residue/ShopUpgrade1AtkBonusSelected.png';
import HPImg from '../../../public/images/residue/ShopUpgrade2HPBonusSelected.png';
import PotatoImg from '../../../public/images/residue/ShopUpgrade3PotatoBonusSelected.png';
import ClassImg from '../../../public/images/residue/ShopUpgrade4ExpBonusSelected.png';
import SkullImg from '../../../public/images/residue/ShopUpgrade5PerkBonusSelected.png';
import ConfectionImg from '../../../public/images/residue/ShopUpgrade6ConfectionExpBonusSelected.png';
import ReincImg from '../../../public/images/residue/ShopUpgrade7ReincExpBonusSelected.png';
import IRImg from '../../../public/images/residue/ShopUpgrade8ItemRatingBonusSelected.png';
import CalciumImg from '../../../public/images/residue/ShopUpgrade9CalciumBonusSelected.png';
import FermentImg from '../../../public/images/residue/ShopUpgrade10FermentingBonusSelected.png';
import RPImg from '../../../public/images/residue/ShopUpgrade11RéincPointBonusSelected.png';
import MilkImg from '../../../public/images/residue/ShopUpgrade12MilkSelected.png';
import WormImg from '../../../public/images/residue/ShopUpgrade13WormQtySelected.png';
import BrewImg from '../../../public/images/residue/ShopUpgrade14BrewerySelected.png';
import PoopImg from '../../../public/images/residue/ShopUpgrade15PoopSelected.png';
import PetDMGImg from '../../../public/images/residue/ShopUpgrade16PetDamageSelected.png';
import PetEXPImg from '../../../public/images/residue/ShopUpgrade17PetExpSelected.png';
import PetRankImg from '../../../public/images/residue/ShopUpgrade18PetRankSelected.png';
import CardPOWImg from '../../../public/images/residue/ShopUpgrade19CardPowerSelected.png';
import CardEXPImg from '../../../public/images/residue/ShopUpgrade20CardExpSelected.png';
import LockedImg from '../../../public/images/residue/locked.png';

import mathHelper from '../util/math.js';



export const residueMap = {

    'attack': {
        img: AttackImg,
        unlock: 0,
        key: 'CowShopAttackBonus',
        bonus: (level) => {
            const base = 1.01;
            const total = mathHelper.pow(base, level);
            const total2 = mathHelper.subtractDecimal(total, 1);
            const total3 = mathHelper.multiplyDecimal(total2, 100);
            return total3;
        },
        cost: (level) => {
            const base = 10;
            const growth = 1.05;

            const exp1 = growth + level * 0.0002;
            const pow = mathHelper.pow(exp1, level);
            const finalCost = mathHelper.multiplyDecimal(base, pow).floor();
            return finalCost;

        },
        weight: (ascension) => { return 4 }
    },
    'hp': {
        img: HPImg,
        unlock: 0,
        key: 'CowShopHPBonus',
        bonus: (level) => {
            const base = 1.01;
            const total = mathHelper.pow(base, level);
            const total2 = mathHelper.subtractDecimal(total, 1);
            const total3 = mathHelper.multiplyDecimal(total2, 100);
            return total3;
        },
        cost: (level) => {
            const base = 10;
            const growth = 1.05;

            const exp1 = growth + level * 0.0002;
            const pow = mathHelper.pow(exp1, level);
            const finalCost = mathHelper.multiplyDecimal(base, pow).floor();
            return finalCost;

        },
        weight: (ascension) => { return 1 }
    },
    'potato': {
        img: PotatoImg,
        unlock: 0,
        key: 'CowShopPotatoBonus',
        bonus: (level) => {
            const base = 1.01;
            const total = mathHelper.pow(base, level);
            const total2 = mathHelper.subtractDecimal(total, 1);
            const total3 = mathHelper.multiplyDecimal(total2, 100);
            return total3;
        },
        cost: (level) => {
            const base = 20;
            const growth = 1.0525;

            const exp1 = growth + level * 0.0002;
            const pow = mathHelper.pow(exp1, level);
            const finalCost = mathHelper.multiplyDecimal(base, pow).floor();
            return finalCost;

        },
        weight: (ascension) => { return 5 }
    },
    'class': {
        img: ClassImg,
        unlock: 0,
        key: 'CowShopClassExpBonus',
        bonus: (level) => {
            const base = 1.01;
            const total = mathHelper.pow(base, level);
            const total2 = mathHelper.subtractDecimal(total, 1);
            const total3 = mathHelper.multiplyDecimal(total2, 100);
            return total3;
        },
        cost: (level) => {
            const base = 30;
            const growth = 1.055;

            const exp1 = growth + level * 0.0002;
            const pow = mathHelper.pow(exp1, level);
            const finalCost = mathHelper.multiplyDecimal(base, pow).floor();
            return finalCost;

        },
        weight: (ascension) => { return 5 }
    },
    'skull': {
        img: SkullImg,
        unlock: 0,
        key: 'CowShopPerkBonus',
        bonus: (level) => {
            const base = 1.01;
            const total = mathHelper.pow(base, level);
            const total2 = mathHelper.subtractDecimal(total, 1);
            const total3 = mathHelper.multiplyDecimal(total2, 100);
            return total3;
        },
        cost: (level) => {
            const base = 75;
            const growth = 1.06;

            const exp1 = growth + level * 0.0002;
            const pow = mathHelper.pow(exp1, level);
            const finalCost = mathHelper.multiplyDecimal(base, pow).floor();
            return finalCost;

        },
        weight: (ascension) => { return 5 }
    },
    'confection': {
        img: ConfectionImg,
        unlock: 0,
        key: 'CowShopConfectionBonus',
        bonus: (level) => {
            const base = 1.01;
            const total = mathHelper.pow(base, level);
            const total2 = mathHelper.subtractDecimal(total, 1);
            const total3 = mathHelper.multiplyDecimal(total2, 100);
            return total3;
        },
        cost: (level) => {
            const base = 30;
            const growth = 1.055;

            const exp1 = growth + level * 0.0002;
            const pow = mathHelper.pow(exp1, level);
            const finalCost = mathHelper.multiplyDecimal(base, pow).floor();
            return finalCost;

        },
        weight: (ascension) => { return 0.5 }
    },
    'reinc': {
        img: ReincImg,
        unlock: 0,
        key: 'CowShopReincarnationBonus',
        bonus: (level) => {
            const base = 1.01;
            const total = mathHelper.pow(base, level);
            const total2 = mathHelper.subtractDecimal(total, 1);
            const total3 = mathHelper.multiplyDecimal(total2, 100);
            return total3;
        },
        cost: (level) => {
            const base = 100;
            const growth = 1.065;

            const exp1 = growth + level * 0.0002;
            const pow = mathHelper.pow(exp1, level);
            const finalCost = mathHelper.multiplyDecimal(base, pow).floor();
            return finalCost;

        },
        weight: (ascension) => { return 100 }
    },
    'ir': {
        img: IRImg,
        unlock: 0,
        key: 'CowShopItemRatingBonus',
        bonus: (level) => {
            const base = 1.01;
            const total = mathHelper.pow(base, level);
            const total2 = mathHelper.subtractDecimal(total, 1);
            const total3 = mathHelper.multiplyDecimal(total2, 100);
            return total3;
        },
        cost: (level) => {
            const base = 150;
            const growth = 1.07;

            const exp1 = growth + level * 0.0002;
            const pow = mathHelper.pow(exp1, level);
            const finalCost = mathHelper.multiplyDecimal(base, pow).floor();
            return finalCost;

        },
        weight: (ascension) => { if (ascension >= 15) return 50; return 30; }
    },
    'calcium': {
        img: CalciumImg,
        unlock: 6,
        key: 'CowShopCalciumBonus',
        bonus: (level) => {
            const base = 1.01;
            const total = mathHelper.pow(base, level);
            const total2 = mathHelper.subtractDecimal(total, 1);
            const total3 = mathHelper.multiplyDecimal(total2, 100);
            return total3;
        },
        cost: (level) => {
            const base = 5000;
            const growth = 1.1;

            const exp1 = growth + level * 0.0002;
            const pow = mathHelper.pow(exp1, level);
            const finalCost = mathHelper.multiplyDecimal(base, pow).floor();
            return finalCost;

        },
        weight: (ascension) => { return 0.5; }
    },
    'ferment': {
        img: FermentImg,
        unlock: 7,
        key: 'CowShopFermentingExp',
        bonus: (level) => {
            const base = 1.01;
            const total = mathHelper.pow(base, level);
            const total2 = mathHelper.subtractDecimal(total, 1);
            const total3 = mathHelper.multiplyDecimal(total2, 100);
            return total3;
        },
        cost: (level) => {
            const base = 10000;
            const growth = 1.125;

            const exp1 = growth + level * 0.0002;
            const pow = mathHelper.pow(exp1, level);
            const finalCost = mathHelper.multiplyDecimal(base, pow).floor();
            return finalCost;

        },
        weight: (ascension) => { return 0.5; }
    },
    'rp': {
        img: RPImg,
        unlock: 12,
        key: 'CowShopReincPtsBonus',
        bonus: (level) => {
            const base = 1.01;
            const total = mathHelper.pow(base, level);
            const total2 = mathHelper.subtractDecimal(total, 1);
            const total3 = mathHelper.multiplyDecimal(total2, 100);
            return total3;
        },
        cost: (level) => {
            const base = 1e9;
            const growth = 1.25;

            const exp1 = growth + level * 0.0002;
            const pow = mathHelper.pow(exp1, level);
            const finalCost = mathHelper.multiplyDecimal(base, pow).floor();
            return finalCost;

        },
        weight: (ascension) => { return 2; }
    },
    'milk': {
        img: MilkImg,
        unlock: 1,
        key: 'CowShopMilkBonus',
        bonus: (level) => {
            const base = 1.01;
            const total = mathHelper.pow(base, level);
            const total2 = mathHelper.subtractDecimal(total, 1);
            const total3 = mathHelper.multiplyDecimal(total2, 100);
            return total3;
        },
        cost: (level) => {
            const base = 200;
            const growth = 1.075;

            const exp1 = growth + level * 0.0002;
            const pow = mathHelper.pow(exp1, level);
            const finalCost = mathHelper.multiplyDecimal(base, pow).floor();
            return finalCost;

        },
        weight: (ascension) => { return 8; }
    },
    'worm_qty': {
        img: WormImg,
        unlock: 2,
        key: 'CowShopWormQtyBonus',
        bonus: (level) => {
            const base = 1.01;
            const total = mathHelper.pow(base, level);
            const total2 = mathHelper.subtractDecimal(total, 1);
            const total3 = mathHelper.multiplyDecimal(total2, 100);
            return total3;
        },
        cost: (level) => {
            const base = 300;
            const growth = 1.08;

            const exp1 = growth + level * 0.0002;
            const pow = mathHelper.pow(exp1, level);
            const finalCost = mathHelper.multiplyDecimal(base, pow).floor();
            return finalCost;

        },
        weight: (ascension) => { return 0.5 }
    },
    'brew': {
        img: BrewImg,
        unlock: 3,
        key: 'CowShopBrewExp',
        bonus: (level) => {
            const base = 1.01;
            const total = mathHelper.pow(base, level);
            const total2 = mathHelper.subtractDecimal(total, 1);
            const total3 = mathHelper.multiplyDecimal(total2, 100);
            return total3;
        },
        cost: (level) => {
            const base = 500;
            const growth = 1.085;

            const exp1 = growth + level * 0.0002;
            const pow = mathHelper.pow(exp1, level);
            const finalCost = mathHelper.multiplyDecimal(base, pow).floor();
            return finalCost;

        },
        weight: (ascension) => { return 0.5 }
    },
    'poop': {
        img: PoopImg,
        unlock: 4,
        key: 'CowShopPoopBonus',
        bonus: (level) => {
            const base = 1.01;
            const total = mathHelper.pow(base, level);
            const total2 = mathHelper.subtractDecimal(total, 1);
            const total3 = mathHelper.multiplyDecimal(total2, 100);
            return total3;
        },
        cost: (level) => {
            const base = 600;
            const growth = 1.09;

            const exp1 = growth + level * 0.0002;
            const pow = mathHelper.pow(exp1, level);
            const finalCost = mathHelper.multiplyDecimal(base, pow).floor();
            return finalCost;

        },
        weight: (ascension) => { return 0.5; }
    },
    'pet_dmg': {
        img: PetDMGImg,
        unlock: 14,
        key: 'CowShopPetDamageBonus',
        bonus: (level) => {
            const base = 1.01;
            const total = mathHelper.pow(base, level);
            const total2 = mathHelper.subtractDecimal(total, 1);
            const total3 = mathHelper.multiplyDecimal(total2, 100);
            return total3;
        },
        cost: (level) => {
            const base = 1e11;
            const growth = 1.3;

            const exp1 = growth + level * 0.0002;
            const pow = mathHelper.pow(exp1, level);
            const finalCost = mathHelper.multiplyDecimal(base, pow).floor();
            return finalCost;

        },
        weight: (ascension) => { return 100; }
    },
    'pet_exp': {
        img: PetEXPImg,
        unlock: 5,
        key: 'CowShopPetLevelExp',
        bonus: (level) => {
            const base = 1.01;
            const total = mathHelper.pow(base, level);
            const total2 = mathHelper.subtractDecimal(total, 1);
            const total3 = mathHelper.multiplyDecimal(total2, 100);
            return total3;
        },
        cost: (level) => {
            const base = 2500;
            const growth = 1.095;

            const exp1 = growth + level * 0.0002;
            const pow = mathHelper.pow(exp1, level);
            const finalCost = mathHelper.multiplyDecimal(base, pow).floor();
            return finalCost;

        },
        weight: (ascension) => { if (ascension >= 15) return 10; return 50; }
    },
    'pet_rank': {
        img: PetRankImg,
        unlock: 9,
        key: 'CowShopPetRankExp',
        bonus: (level) => {
            const base = 1.01;
            const total = mathHelper.pow(base, level);
            const total2 = mathHelper.subtractDecimal(total, 1);
            const total3 = mathHelper.multiplyDecimal(total2, 100);
            return total3;
        },
        cost: (level) => {
            const base = 1e6;
            const growth = 1.175;

            const exp1 = growth + level * 0.0002;
            const pow = mathHelper.pow(exp1, level);
            const finalCost = mathHelper.multiplyDecimal(base, pow).floor();
            return finalCost;

        },
        weight: (ascension) => { if (ascension >= 15) return 10; return 20; }
    },
    'card_pow': {
        img: CardPOWImg,
        unlock: 8,
        key: 'CowShopCardPowerBonus',
        bonus: (level) => {
            const base = 1.01;
            const total = mathHelper.pow(base, level);
            const total2 = mathHelper.subtractDecimal(total, 1);
            const total3 = mathHelper.multiplyDecimal(total2, 100);
            return total3;
        },
        cost: (level) => {
            const base = 1e5;
            const growth = 1.15;

            const exp1 = growth + level * 0.0002;
            const pow = mathHelper.pow(exp1, level);
            const finalCost = mathHelper.multiplyDecimal(base, pow).floor();
            return finalCost;

        },
        weight: (ascension) => { if (ascension >= 15) return 100; return 5; }
    },
    'card_exp': {
        img: CardEXPImg,
        unlock: 10,
        key: 'CowShopCardExp',
        bonus: (level) => {
            const base = 1.01;
            const total = mathHelper.pow(base, level);
            const total2 = mathHelper.subtractDecimal(total, 1);
            const total3 = mathHelper.multiplyDecimal(total2, 100);
            return total3;
        },
        cost: (level) => {
            const base = 1e7;
            const growth = 1.2;

            const exp1 = growth + level * 0.0002;
            const pow = mathHelper.pow(exp1, level);
            const finalCost = mathHelper.multiplyDecimal(base, pow).floor();
            return finalCost;

        },
        weight: (ascension) => { if (ascension >= 15) return 10; return 5; }
    },
    'locked': {
        img: LockedImg
    }
}