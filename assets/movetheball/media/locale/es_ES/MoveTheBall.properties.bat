cd %~dp0
mxmlc -locale=es_ES -source-path="." -include-resource-bundles=MoveTheBall -output "MoveTheBall.properties.swf" 
copy MoveTheBall.properties.swf ..\..\..\..\..\cognifitSocialFlex\src\media\games\moveTheBall\locale\es_ES\ 
