import { createFileRoute } from "@tanstack/react-router";
import Banner from "../components/Banner";
import Tag from "../components/Tag";
import YouMayLike from "../components/YouMayLike";

const Homepage = () => {
    return (
        <>
            <Banner />
            <section className="h-screen flex flex-col justify-between">
                <div className="promotion gap-[92px] relative flex overflow-hidden py-3.5 bg-black text-[13px]">
                    <ul className="marquee-promotion flex gap-[92px] text-white text-nowrap">
                        <li>SIGN UP FOR 10% OFF YOUR FIRST ORDER</li>
                        <li>FREE DELIVERY AND RETURNS FROM $120</li>
                        <li>MID-SEASON SALE UP TO 50% OFF</li>
                        <li>SIGN UP FOR 10% OFF YOUR FIRST ORDER</li>
                    </ul>
                    <ul className="marquee-promotion flex gap-[92px] text-white text-nowrap">
                        <li>SIGN UP FOR 10% OFF YOUR FIRST ORDER</li>
                        <li>FREE DELIVERY AND RETURNS FROM $120</li>
                        <li>MID-SEASON SALE UP TO 50% OFF</li>
                        <li>SIGN UP FOR 10% OFF YOUR FIRST ORDER</li>
                    </ul>
                    <ul className="marquee-promotion flex gap-[92px] text-white text-nowrap">
                        <li>SIGN UP FOR 10% OFF YOUR FIRST ORDER</li>
                        <li>FREE DELIVERY AND RETURNS FROM $120</li>
                        <li>MID-SEASON SALE UP TO 50% OFF</li>
                        <li>SIGN UP FOR 10% OFF YOUR FIRST ORDER</li>
                    </ul>
                    <ul className="marquee-promotion flex gap-[92px] text-white text-nowrap">
                        <li>SIGN UP FOR 10% OFF YOUR FIRST ORDER</li>
                        <li>FREE DELIVERY AND RETURNS FROM $120</li>
                        <li>MID-SEASON SALE UP TO 50% OFF</li>
                        <li>SIGN UP FOR 10% OFF YOUR FIRST ORDER</li>
                    </ul>
                </div>
                <div className="grid place-items-center">
                    <div className="container">
                        <div className="flex gap-[96px] flex-wrap items-center justify-center">
                            <Tag tagName={"Party"} itemValue={22} />
                            <Tag tagName={"Jackets & Coats"} itemValue={22} />
                            <Tag tagName={"Blazers & Suits"} itemValue={22} />
                            <Tag tagName={"Dresses"} itemValue={22} />
                            <Tag tagName={"Tops & T-shirts"} itemValue={22} />
                            <Tag tagName={"Skirts & Shorts"} itemValue={22} />
                            <Tag tagName={"Tracksuit"} itemValue={22} />
                            <Tag tagName={"Accessories"} itemValue={22} />
                        </div>
                    </div>
                </div>
                <div className="promotion gap-[92px] relative flex overflow-hidden py-3.5 bg-black text-[13px]">
                    <ul className="marquee-promotion flex gap-[92px] text-white text-nowrap">
                        <li>SIGN UP FOR 10% OFF YOUR FIRST ORDER</li>
                        <li>FREE DELIVERY AND RETURNS FROM $120</li>
                        <li>MID-SEASON SALE UP TO 50% OFF</li>
                        <li>SIGN UP FOR 10% OFF YOUR FIRST ORDER</li>
                    </ul>
                    <ul className="marquee-promotion flex gap-[92px] text-white text-nowrap">
                        <li>SIGN UP FOR 10% OFF YOUR FIRST ORDER</li>
                        <li>FREE DELIVERY AND RETURNS FROM $120</li>
                        <li>MID-SEASON SALE UP TO 50% OFF</li>
                        <li>SIGN UP FOR 10% OFF YOUR FIRST ORDER</li>
                    </ul>
                    <ul className="marquee-promotion flex gap-[92px] text-white text-nowrap">
                        <li>SIGN UP FOR 10% OFF YOUR FIRST ORDER</li>
                        <li>FREE DELIVERY AND RETURNS FROM $120</li>
                        <li>MID-SEASON SALE UP TO 50% OFF</li>
                        <li>SIGN UP FOR 10% OFF YOUR FIRST ORDER</li>
                    </ul>
                    <ul className="marquee-promotion flex gap-[92px] text-white text-nowrap">
                        <li>SIGN UP FOR 10% OFF YOUR FIRST ORDER</li>
                        <li>FREE DELIVERY AND RETURNS FROM $120</li>
                        <li>MID-SEASON SALE UP TO 50% OFF</li>
                        <li>SIGN UP FOR 10% OFF YOUR FIRST ORDER</li>
                    </ul>
                </div>
            </section>
            <section className="h-screen grid place-items-center">
                <div className="container">
                    <div className="text-[36px] tenor-sans text-center">It May Interest You</div>
                </div>
            </section>
            <YouMayLike />
        </>
    );
};

export const Route = createFileRoute('/')({
    component: Homepage,
})