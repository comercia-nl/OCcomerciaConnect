<?php
use comercia\Util;

return function () {
    Util::patch()->table("ccDeletedEntities")
        ->addField('type', 'varchar(250)')
        ->addField('entityId', 'int')
        ->addField('isCleaned', 'tinyint')
        ->save();

    Util::db()->query("DROP TRIGGER IF EXISTS `ccDeleteProduct`");
    Util::db()->query("CREATE TRIGGER ccDeleteProduct AFTER DELETE ON `" . DB_PREFIX . "product` FOR EACH ROW BEGIN INSERT INTO `" . DB_PREFIX . "ccDeletedEntities` SET `type` = 'product', `entityId` = old.product_id, `isCleaned` = 0; END");
    Util::db()->query("DROP TRIGGER IF EXISTS `ccDeleteOrder`");
    Util::db()->query("CREATE TRIGGER ccDeleteOrder AFTER DELETE ON `" . DB_PREFIX . "order` FOR EACH ROW BEGIN INSERT INTO `" . DB_PREFIX . "ccDeletedEntities` SET `type` = 'order', `entityId` = old.order_id, `isCleaned` = 0; END");
    Util::db()->query("DROP TRIGGER IF EXISTS `ccDeleteCategory`");
    Util::db()->query("CREATE TRIGGER ccDeleteCategory AFTER DELETE ON `" . DB_PREFIX . "category` FOR EACH ROW BEGIN INSERT INTO `" . DB_PREFIX . "ccDeletedEntities` SET `type` = 'category', `entityId` = old.category_id, `isCleaned` = 0; END");
};