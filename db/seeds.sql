INSERT INTO `burgers` (burger_name, devoured) VALUE ("Black Bean Burger", true);
INSERT INTO `burgers` (burger_name, devoured) VALUE ("Potato Burger", true);
INSERT INTO `burgers` (burger_name, devoured) VALUE ("Veggie Quiona Burger", false);

UPDATE `burgers` SET burger_name="new famous burger" WHERE devoured = false;