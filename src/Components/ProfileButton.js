export default function profileButton(props) {

    if(props.username === undefined) {

        return(

            <div>
                NAO CONECTADO
            </div>            

        )

    }

  return (
    <div>

        CONECTADO

    </div>
  )
}
