let authToken = "NULL";

export default function login(req, res) {

    if(req.method === "GET"){

        res.status(200).json(authToken);

    }else if(req.method === "POST"){

        authToken = req.body.submitToken;

        res.status(201).json(authToken);

    }

}