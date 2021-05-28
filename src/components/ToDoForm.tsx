import React, { useRef } from "react"

interface TodoFormProps {
    onAdd(title: string): void
}

export const ToDoForm: React.FC<TodoFormProps> = props => {
    // const [title, setTitle] = useState<string>("")

    const ref = useRef<HTMLInputElement>(null)


    // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setTitle(event.target.value)
    // }

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === "Enter") {
            props.onAdd(ref.current!.value)
            ref.current!.value = ''
            // console.log(title)
            // setTitle('')
        }
    }

    return (
        <div className="input-field">
            <input
                onKeyPress={keyPressHandler}

                // onChange={changeHandler}
                // value={title}
                ref={ref}
                type="text"
                id="title"
                placeholder="Write deal name"
            />
            <label htmlFor="title" className="active">
                Write deal name
      </label>
        </div>
    )
}
