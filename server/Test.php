<?php

    header('Access-Control-Allow-Origin: http://localhost:5173');
    // Allow specific methods, e.g., GET, POST, etc.
    header('Access-Control-Allow-Methods: GET, POST');

    // Allow specific headers, include 'Content-Type' if it's being sent in your requests
    header('Access-Control-Allow-Headers: Content-Type');

    class Test {

        private $username;
        private $page;

        public function __construct($page) {
            $this->username = "glebby";
            $this->page = $page;
            $this->controller();
        }

        private function controller() {
            switch ($this->page) {
                case 'home':
                    echo json_encode(["username" => $this->username]);
                    break;
                case 'blogs':
                    echo json_encode(["blogNames" => ["Blog 1", "Blog 2", "Blog 3"]]);
                    break;
            }
        }

    }

    $page = 'home';
    if (isset($_POST["page"])) {
        $page = $_POST["page"];
    }
    $test = new Test($page);

?>