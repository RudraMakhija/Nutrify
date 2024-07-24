import { React, useState } from 'react'
import fruitsData from '../JSON/fruitsData.js'
import Charts from './Charts.jsx'
import { AiOutlineBarChart, AiOutlineLineChart } from 'react-icons/ai'
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => {
    const [fruit1, setFruit1] = useState([])
    const [fruit2, setFruit2] = useState([])
    const [isShown, setIsShown] = useState(false);
    const [mode, setMode] = useState('');

    const getFruitInfo = (fruitName, getValue) => {
        let newGetValue;
        fruitsData.forEach((key) => {
            if (key.name === fruitName) {
                newGetValue = key[getValue]
            }
        })
        return newGetValue;
    }
    const setFruitHandler1 = (e) => {
        setFruit1([])
        if (e.target.value === 'Select Fruit') {
            setFruit1([])
            setIsShown(false);
        } else {
            setFruit1([
                e.target.value,
                getFruitInfo(e.target.value, "nutritions"),
                getFruitInfo(e.target.value, "imgUrl"),
                getFruitInfo(e.target.value, "genus"),
                getFruitInfo(e.target.value, "family"),
                getFruitInfo(e.target.value, "order")
            ])
        }
    }

    const setFruitHandler2 = (e) => {
        setFruit2([])
        if (e.target.value === 'Select Fruit') {
            setFruit2([])
            setIsShown(false);
        } else {
            setFruit2([
                e.target.value,
                getFruitInfo(e.target.value, "nutritions"),
                getFruitInfo(e.target.value, "imgUrl"),
                getFruitInfo(e.target.value, "genus"),
                getFruitInfo(e.target.value, "family"),
                getFruitInfo(e.target.value, "order")
            ])
        }
    }
    const barHandleClick = () => {
        setMode('bar')
        setIsShown(true);
    };
    const lineHandleClick = () => {
        setMode('line')
        setIsShown(true);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-grow">
                <div className="my-4">
                    <div className="text-center">
                        <h1 className='font-extrabold text-5xl mt-12'>Select two fruits for nutritional value comparison.</h1>
                    </div>

                    <form className="flex flex-col items-center w-full p-6 space-y-4">
                        <select
                            onChange={setFruitHandler1}
                            className="bg-[#FEC2A0] text-[#024397] font-extrabold text-lg px-4 py-2 w-full border border-[#00274d] rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-[#003d6b] focus:border-transparent"
                            aria-label="Select first fruit"
                        >
                            <option defaultValue="Select Fruit">Select Fruit</option>
                            {fruitsData.map((fruit) => (
                                <option key={fruit.id} value={fruit.name}>{fruit.name}</option>
                            ))}
                        </select>

                        <select
                            onChange={setFruitHandler2}
                            className="bg-[#FEC2A0] text-[#024397] font-extrabold text-lg px-4 py-2 w-full border border-[#00274d] rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-[#003d6b] focus:border-transparent"
                            aria-label="Select second fruit"
                        >
                            <option defaultValue="Select Fruit">Select Fruit</option>
                            {fruitsData.map((fruit) => (
                                <option key={fruit.id} value={fruit.name}>{fruit.name}</option>
                            ))}
                        </select>

                        <div className="flex justify-center w-full space-x-4">
                            <button
                                disabled={(fruit1.length === 0 || fruit2.length === 0)}
                                onClick={barHandleClick}
                                className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-md min-w-[150px] flex items-center justify-center transition-transform transform hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                type="button"
                            >
                                <AiOutlineBarChart className="mr-2" /> Bar Chart
                            </button>

                            <button
                                disabled={(fruit1.length === 0 || fruit2.length === 0)}
                                onClick={lineHandleClick}
                                className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-md min-w-[150px] flex items-center justify-center transition-transform transform hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                type="button"
                            >
                                <AiOutlineLineChart className="mr-2" /> Line Chart
                            </button>
                        </div>
                    </form>

                    {isShown && (
                        <div className="my-8">
                            <hr className="my-4 border-t-4 border-gray-400" />

                            <div className="flex flex-row justify-evenly items-start w-full mb-8">
                                <div className="flex flex-col items-center">
                                    <h3 className='text-white text-5xl font-extrabold mb-2'>{fruit1[0]}</h3>
                                    <div className="flex flex-col items-center">
                                        <img 
                                            src={fruit1[2]} 
                                            className="h-48 w-48 rounded-[16%] shadow-lg border border-gray-300 mb-4 object-cover" 
                                            alt="First Fruit" 
                                        />
                                        <div className="text-center text-white font-bold">
                                            <p>Genus  : {fruit1[3]}</p>
                                            <p>Family : {fruit1[4]}</p>
                                            <p>Order  : {fruit1[5]}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <h2 className='text-5xl font-extrabold '>VS.</h2>
                                </div>

                                <div className="flex flex-col items-center">
                                    <h3 className='text-white text-5xl font-extrabold mb-2'>{fruit2[0]}</h3>
                                    <div className="flex flex-col items-center">
                                        <img 
                                            src={fruit2[2]} 
                                            className="h-48 w-48 rounded-[16%] shadow-lg border border-gray-300 mb-4 object-cover" 
                                            alt="Second Fruit" 
                                        />
                                        <div className="text-center text-white font-bold">
                                            <p>Genus : {fruit2[3]}</p>
                                            <p>Family : {fruit2[4]}</p>
                                            <p>Order : {fruit2[5]}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <Charts mode={mode} fruit1={fruit1} fruit2={fruit2} />
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <footer className="bg-[#3a1c71] flex justify-center items-center gap-4 py-3">
                <div className="text-[1rem] text-white">
                    Developed and maintained by Rudra Makhija.
                </div>
                <div className="flex gap-4 text-2xl text-white">
                    <a href="https://www.linkedin.com/in/rudramakhija/" target="blank"> 
                        <FaLinkedin className="cursor-pointer hover:text-red-600 duration-300" />
                    </a>
                    <a href="https://github.com/RudraMakhija" target="blank">
                        <FaGithub className="cursor-pointer hover:text-red-600 duration-300" />
                    </a>
                </div>
            </footer>
        </div>
    )
}

export default Home
