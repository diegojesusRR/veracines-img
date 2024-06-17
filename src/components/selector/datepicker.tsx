
import {useEffect, useState} from "react";
import Datepicker from "tailwind-datepicker-react"

export const CustomDatepicker = ({dia, setDia, className}:{dia: Date, setDia: (dia: Date) => void, className: string}) => {

    const [options, setOptions] = useState({
        title: "Selecciona una fecha",
        autoHide: true,
        todayBtn: false,
        clearBtn: true,
        clearBtnText: "Eliminar",
        maxDate: new Date("2050-01-01"),
        minDate: new Date("2024-01-01"),
        theme: {
            background: "bg-white",
            todayBtn: "",
            clearBtn: "",
            icons: "",
            text: "",
            disabledText: "bg-gray-200",
            input: "",
            inputIcon: "",
            selected: "",
        },
        icons: {
            // () => ReactElement | JSX.Element
            prev: () => <span>Anterior</span>,
            next: () => <span>Siguiente</span>,
        },
        datepickerClassNames: "top-12",
        defaultDate: dia,
        language: "es",
        disabledDates: [],
        weekDays: ["L", "M", "X", "J", "V", "S", "D"],
        inputNameProp: "date",
        inputIdProp: "date",
        inputPlaceholderProp: "Select Date",
        inputDateFormatProp: {
            day: "numeric" as any,
            month: "long" as any,
            year: "numeric" as any,
        }
    });


    const [show, setShow] = useState(false);

    return (
        <div className={className + ''}>
            <Datepicker value={dia} options={options} onChange={(date) => {if(date) setDia(date)}} show={show} setShow={(show) => setShow(show)} />
        </div>
    )
}