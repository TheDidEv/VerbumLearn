import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { logout } from "../../slices/authSlice";
import { allDataAnalysis } from "../../slices/dataAnalysisSlice";
import { PieChart, Pie, Cell } from "recharts";
import axiosInstance from "../../api/axiosInstance";

export const UserPage = () => {
    const [first, setFirst] = useState('');
    const [second, setSecond] = useState('');
    const [dataByDate, setDataByDate] = useState(null);
    const [flagStat, setFlagStat] = useState(false);

    const dispatch = useAppDispatch();
    const userInfo = useAppSelector(state => state.auth.basicUserInfo)
    const userId = userInfo?.Id;
    const userEmail = userInfo?.Email;


    const handlerLogout = async () => {
        try {
            await dispatch(logout()).unwrap();
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        dispatch(allDataAnalysis(userId!)).unwrap();
    }, [dispatch])

    const userAllData = useAppSelector(state => state.userData.allData);

    const PieChartsData = [
        { name: "Wrong", value: userAllData?.WRONG },
        { name: "Mid", value: userAllData?.MID },
        { name: "Lerned", value: userAllData?.LERNED },
    ];
    const COLORS = ["#EC3E19", "#FFBB28", "#00C49F"];

    const getStatisticByDate = async (dateFrom: string, dateTo: string) => {
        if (first === '' || second === '') {
            setFlagStat(true);
        }
        else {
            if (userEmail !== null || userEmail != undefined) {
                const response = await axiosInstance.post('data/wordsAnalysisByTwoDate', { userEmail, dateFrom, dateTo });
                setDataByDate(response.data);
                setFlagStat(false);
            }
            else {
                setFlagStat(true);
            }
        }

    }

    return (
        <div className="">
            <div className="h-52 py-8">
                <p className="py-1">Username: {userInfo?.UserName}</p>
                <p className="py-1">Email: {userInfo?.Email}</p>
                <p className="py-1">Account create at: {userInfo?.CreateAt.toString().split('T')[0]}</p>
            </div>

            <div className="h-auto bg-gray-100 rounded-lg">
                <div>Data analysis:</div>

                <div className="flex">

                    <div style={{ width: "500px" }} >
                        <p className="py-6">All data</p>

                        <PieChart width={500} height={300}>
                            <Pie data={PieChartsData}
                                cx="50%"
                                cy="50%"
                                dataKey="value"
                                label={({
                                    cx,
                                    cy,
                                    midAngle,
                                    innerRadius,
                                    outerRadius,
                                    value,
                                    index
                                }) => {
                                    const RADIAN = Math.PI / 180;
                                    const radius = 25 + innerRadius + (outerRadius - innerRadius);
                                    const x = cx + radius * Math.cos(-midAngle * RADIAN);
                                    const y = cy + radius * Math.sin(-midAngle * RADIAN);

                                    return (
                                        <text
                                            x={x}
                                            y={y}
                                            fill="#000"
                                            textAnchor={x > cx ? "start" : "end"}
                                            dominantBaseline="central"
                                        >
                                            {PieChartsData[index].name} - {value}
                                        </text>
                                    );
                                }}
                            >
                                {PieChartsData.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={COLORS[index % COLORS.length]}
                                    />
                                ))}
                            </Pie>
                        </PieChart>
                    </div>

                    <div>
                        <p className="my-5">Check lerned words by date</p>

                        <div>
                            <p>From:</p>
                            <input
                                type="date"
                                value={first}
                                onChange={(e) => setFirst(e.target.value)}
                            />
                        </div>
                        <div>
                            <p>To:</p>
                            <input
                                type="date"
                                value={second}
                                onChange={(e) => setSecond(e.target.value)}
                            />
                        </div>

                        <button
                            className="bg-gray-200 rounded-lg p-2 my-4"
                            onClick={() => getStatisticByDate(first, second)}
                        >
                            Get statistic
                        </button>
                        {flagStat ?
                            <div className="bg-red-100">
                                You must choose correct date
                            </div>
                            : null}

                    </div>

                    <div>
                        {dataByDate !== null ?

                            <p className="my-28 mx-10">
                                {dataByDate === 0 && dataByDate != null ?
                                    "We are very sad that you did not learn the words in the given time period: "
                                    : "You are cool, you learned the words in the given time period: "}
                                {dataByDate}
                            </p>

                            : null}
                    </div>
                </div>

            </div>

            <button
                className="bg-gray-200 rounded-lg p-2 my-4"
                onClick={() => handlerLogout()}
            >
                Logout
            </button>
        </div>
    );
}