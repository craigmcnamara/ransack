"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Introduction","href":"/ransack/","docId":"intro"},{"type":"category","label":"Getting started","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Simple mode","href":"/ransack/getting-started/simple-mode","docId":"getting-started/simple-mode"},{"type":"link","label":"Advanced Mode","href":"/ransack/getting-started/advanced-mode","docId":"getting-started/advanced-mode"},{"type":"link","label":"Configuration","href":"/ransack/getting-started/configuration","docId":"getting-started/configuration"},{"type":"link","label":"Search Matchers","href":"/ransack/getting-started/search-matches","docId":"getting-started/search-matches"},{"type":"link","label":"Sorting","href":"/ransack/getting-started/sorting","docId":"getting-started/sorting"},{"type":"link","label":"Using Predicates","href":"/ransack/getting-started/using-predicates","docId":"getting-started/using-predicates"}]},{"type":"category","label":"Going further","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Associations","href":"/ransack/going-further/associations","docId":"going-further/associations"},{"type":"link","label":"Custom predicates","href":"/ransack/going-further/custom-predicates","docId":"going-further/custom-predicates"},{"type":"link","label":"CSV Export","href":"/ransack/going-further/exporting-to-csv","docId":"going-further/exporting-to-csv"},{"type":"link","label":"i18n","href":"/ransack/going-further/i18n","docId":"going-further/i18n"},{"type":"link","label":"Form customisation","href":"/ransack/going-further/form-customisation","docId":"going-further/form-customisation"},{"type":"link","label":"Merging searches","href":"/ransack/going-further/merging-searches","docId":"going-further/merging-searches"},{"type":"link","label":"Ransackers","href":"/ransack/going-further/ransackers","docId":"going-further/ransackers"},{"type":"link","label":"Saving queries","href":"/ransack/going-further/saving-queries","docId":"going-further/saving-queries"},{"type":"link","label":"Other notes","href":"/ransack/going-further/other-notes","docId":"going-further/other-notes"},{"type":"link","label":"Postgres searches","href":"/ransack/going-further/searching-postgres","docId":"going-further/searching-postgres"},{"type":"link","label":"External resources","href":"/ransack/going-further/external-guides","docId":"going-further/external-guides"},{"type":"link","label":"Documentation","href":"/ransack/going-further/documentation","docId":"going-further/documentation"},{"type":"link","label":"Versions and Releases","href":"/ransack/going-further/release_process","docId":"going-further/release_process"},{"type":"link","label":"Wiki Contributors","href":"/ransack/going-further/wiki-contributors","docId":"going-further/wiki-contributors"},{"type":"link","label":"Acts-as-taggable-on","href":"/ransack/going-further/acts-as-taggable-on","docId":"going-further/acts-as-taggable-on"},{"type":"link","label":"Polymorphic Searches","href":"/ransack/going-further/polymorphic-search","docId":"going-further/polymorphic-search"}]}]},"docs":{"getting-started/advanced-mode":{"id":"getting-started/advanced-mode","title":"Advanced Mode","description":"\\"Advanced\\" searches Rails\'s nested attributes functionality in order to","sidebar":"tutorialSidebar"},"getting-started/configuration":{"id":"getting-started/configuration","title":"Configuration","description":"Ransack may be easily configured. The best place to put configuration is in an initializer file at config/initializers/ransack.rb, containing code such as:","sidebar":"tutorialSidebar"},"getting-started/search-matches":{"id":"getting-started/search-matches","title":"Search Matchers","description":"Search Matchers","sidebar":"tutorialSidebar"},"getting-started/simple-mode":{"id":"getting-started/simple-mode","title":"Simple mode","description":"Ransack can be used in one of two modes, simple or advanced. For","sidebar":"tutorialSidebar"},"getting-started/sorting":{"id":"getting-started/sorting","title":"Sorting","description":"Sorting in the View","sidebar":"tutorialSidebar"},"getting-started/using-predicates":{"id":"getting-started/using-predicates","title":"Using Predicates","description":"The primary method of searching in Ransack is by using what is known as predicates.","sidebar":"tutorialSidebar"},"going-further/acts-as-taggable-on":{"id":"going-further/acts-as-taggable-on","title":"Acts-as-taggable-on","description":"If you have an ActiveRecord model and you\'re using acts-as-taggable-on,","sidebar":"tutorialSidebar"},"going-further/associations":{"id":"going-further/associations","title":"Associations","description":"Associations","sidebar":"tutorialSidebar"},"going-further/custom-predicates":{"id":"going-further/custom-predicates","title":"Custom predicates","description":"If you\'d like to add your own custom Ransack predicates:","sidebar":"tutorialSidebar"},"going-further/documentation":{"id":"going-further/documentation","title":"Documentation","description":"Ransack uses Docusaurus for documentation. To contribute to the docs simply use the \\"Edit this page\\" link from any page to directly edit, or else pull the repo and edit locally.","sidebar":"tutorialSidebar"},"going-further/exporting-to-csv":{"id":"going-further/exporting-to-csv","title":"CSV Export","description":"Exporting to CSV","sidebar":"tutorialSidebar"},"going-further/external-guides":{"id":"going-further/external-guides","title":"External resources","description":"There is a plethora of material on Ransack around the internet. We\'ve collected some here for your convenience.","sidebar":"tutorialSidebar"},"going-further/form-customisation":{"id":"going-further/form-customisation","title":"Form customisation","description":"Predicate and attribute labels in forms may be specified with I18n in a translation file (see the locale files in Ransack:","sidebar":"tutorialSidebar"},"going-further/i18n":{"id":"going-further/i18n","title":"i18n","description":"Ransack translation files are available in","sidebar":"tutorialSidebar"},"going-further/merging-searches":{"id":"going-further/merging-searches","title":"Merging searches","description":"To find records that match multiple searches, it\'s possible to merge all the ransack search conditions into an ActiveRecord relation to perform a single query. In order to avoid conflicts between joined table names it\'s necessary to set up a shared context to track table aliases used across all the conditions before initializing the searches:","sidebar":"tutorialSidebar"},"going-further/other-notes":{"id":"going-further/other-notes","title":"Other notes","description":"Ransack Aliases","sidebar":"tutorialSidebar"},"going-further/polymorphic-search":{"id":"going-further/polymorphic-search","title":"Polymorphic Searches","description":"When making searches from polymorphic models it is necessary to specify the type of model you are searching.","sidebar":"tutorialSidebar"},"going-further/ransackers":{"id":"going-further/ransackers","title":"Ransackers","description":"Add custom search functions","sidebar":"tutorialSidebar"},"going-further/release_process":{"id":"going-further/release_process","title":"Versions and Releases","description":"Semantic Versioning","sidebar":"tutorialSidebar"},"going-further/saving-queries":{"id":"going-further/saving-queries","title":"Saving queries","description":"Ransack Memory Gem","sidebar":"tutorialSidebar"},"going-further/searching-postgres":{"id":"going-further/searching-postgres","title":"Postgres searches","description":"Searching on Postgres-specific column types.","sidebar":"tutorialSidebar"},"going-further/wiki-contributors":{"id":"going-further/wiki-contributors","title":"Wiki Contributors","description":"Ransack previously had documentation contained in a GitHub Wiki, and this content has been merged into this documentation website. The following long list of amazing people all made contributions to the Wiki:","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"Introduction","description":"Ransack will help you easily add searching to your Rails application, without any additional dependencies.","sidebar":"tutorialSidebar"}}}')}}]);