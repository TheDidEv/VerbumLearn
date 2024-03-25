import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { logout } from "../../slices/authSlice";
import { allDataAnalysis } from "../../slices/dataAnalysisSlice";
import { PieChart, Pie, Cell } from "recharts";
export const UserPage = () => {
    const dispatch = useAppDispatch();
    const userInfo = useAppSelector(state => state.auth.basicUserInfo)
    const userId = userInfo?.Id;

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

    // For PieChart
    const PieChartsData = [
        { name: "Wrong", value: userAllData?.WRONG },
        { name: "Mid", value: userAllData?.MID },
        { name: "Lerned", value: userAllData?.LERNED },
    ];
    const COLORS = ["#EC3E19", "#FFBB28", "#00C49F"];

    return (
        <div className="">
            <div className="h-52 py-8">
                <p className="py-1">Username: {userInfo?.UserName}</p>
                <p className="py-1">Email: {userInfo?.Email}</p>
                <p className="py-1">Account create at: {userInfo?.CreateAt.toString().split('T')[0]}</p>
            </div>

            <div className="h-96 bg-gray-100">
                <div>Data analysis:</div>

                <div style={{ width: "500px" }}>
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
                                // eslint-disable-next-line
                                const radius = 25 + innerRadius + (outerRadius - innerRadius);
                                // eslint-disable-next-line
                                const x = cx + radius * Math.cos(-midAngle * RADIAN);
                                // eslint-disable-next-line
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