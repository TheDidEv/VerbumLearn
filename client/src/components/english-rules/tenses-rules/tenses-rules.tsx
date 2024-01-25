import { tenses } from "./tenses-list";

export const TensesRules = () => {
    return (
        <div>
            {tenses.map((elem) => {
                return (
                    <div key={elem.name} className="flex flex-col items-center bg-gray-100 m-5 border border-gray-200 rounded-lg">
                        <h2 className="my-1 w-40 bg-white rounded-lg">{elem.name}</h2>

                        <div className="flex flex-col items-center">
                            <br />
                            <h3 className="w-40 bg-green-100 rounded-lg">Ствердження</h3>
                            <p>Для He/She/It. {elem.rules_statement.rule_HeShiIt}</p>
                            <p>Приклади: {elem.rules_statement.example_HeShiIt}</p>
                            <br />
                            <p>Для I/You/We/They. {elem.rules_statement.rule_IYouWeThey}</p>
                            <p>Приклади: {elem.rules_statement.example_IYouWeThey}</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <br />
                            <h3 className="w-40 bg-red-100 rounded-lg">Заперечення</h3>
                            <p>Для He/She/It. {elem.rules_denial.rule_HeShiIt}</p>
                            <p>Приклади: {elem.rules_denial.example_HeShiIt}</p>
                            <br />
                            <p>Для I/You/We/They. {elem.rules_denial.rule_IYouWeThey}</p>
                            <p>Приклади: {elem.rules_denial.example_IYouWeThey}</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <br />
                            <h3 className="w-40 bg-yellow-100 rounded-lg">Питання</h3>
                            <p>Для He/She/It. {elem.rules_question.rule_HeShiIt}</p>
                            <p>Приклади: {elem.rules_question.example_HeShiIt}</p>
                            <br />
                            <p>Для I/You/We/They. {elem.rules_question.rule_IYouWeThey}</p>
                            <p>Приклади: {elem.rules_question.example_IYouWeThey}</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <br />
                            <h3 className="w-40 bg-purple-100 rounded-lg">Маркери</h3>
                            <p>{elem.tenses_marker.rules}</p>
                            <p>{elem.tenses_marker.markers}</p>
                        </div>

                    </div>
                );
            })}
        </div>
    );
}