import Html exposing(div, text, button)
import Html.Events exposing (onClick)

subscriptions : State -> Sub Action
subscriptions model = Sub.none

type Action = INCREMENT_COUNT Int | RESET_COUNT

type alias State = {
    count: Int
  }

initialState = ({count = 0}, Cmd.none)

reducer action state = (innerReducer action state, Cmd.none)

innerReducer action state = case action of
  INCREMENT_COUNT increment -> {state | count = state.count + increment}
  RESET_COUNT -> {state | count = 0}

c : Int -> Action
c v = INCREMENT_COUNT v

app state = div [][
    div [][text (toString state.count)],
    button [onClick (c 3)] [text "increment by 3"],
    button [onClick RESET_COUNT] [text "reset count"]
  ]

main = Html.program {
        init = initialState,
        view = app,
        update = reducer,
        subscriptions = subscriptions
    }
