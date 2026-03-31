import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { dummyPizzaToppingsFromApi } from "./dummy-pizza-toppings";
import { useState } from "react";
import Form from "react-bootstrap/Form";

export const PizzaToppings = () => {

    //
    // React hooks...
    //
    const [availablePizzaToppings, setAvailablePizzaToppings] = useState(
        dummyPizzaToppingsFromApi.map(
            x => ({
                ...x,
                checked: false,
            })
        )
    );

    //
    // Calculated/derived state and other code...
    //

    //
    // Return JSX...
    // 
    return (
        <Card>
            <Card.Body>
                <Card.Title
                    className="mb-3"
                >
                    Choose your pizza toppings...
                </Card.Title>
                <Button
                    variant="outline-primary"
                >
                    All
                </Button>
                <Button
                    className="ms-2"
                    variant="outline-primary"
                >
                    None
                </Button>
                <Form
                    className="mt-3"
                >
                    {
                        availablePizzaToppings.map(
                            x => (
                                <Form.Check 
                                    key={x.name}
                                    id={x.name}
                                    type="checkbox"
                                    label={`${x.name} ($${x.price.toFixed(2)})`}
                                />
                            )
                        )
                    }
                </Form>
                <h4
                    className="mt-3"
                >
                    Total: $0.00
                </h4>
            </Card.Body>
        </Card>
    );
}
