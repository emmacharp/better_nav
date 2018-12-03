<?php
    Class extension_better_nav extends Extension
    {

        /**
        * Set the delegates
        */
        public function getSubscribedDelegates()
        {
            return array(
                array(
                    'page' => '/backend/',
                    'delegate' => 'InitaliseAdminPageHead',
                    'callback' => 'addScriptToHead'
                )
            );
        }

        /**
         * Add script to the <head>-section of the admin area
         */
        public function addScriptToHead($context)
        {
            Administration::instance()->Page->addScriptToHead(URL.'/extensions/better_nav/assets/nav.js');
            Administration::instance()->Page->addStylesheetToHead(URL.'/extensions/better_nav/assets/nav.css');
        }
    }
?>
