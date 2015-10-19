cd %~dp0
mxmlc -locale=ru_RU -source-path="." -include-resource-bundles=MoveTheBall -output "MoveTheBall.properties.swf"
copy MoveTheBall.properties.swf ..\..\..\..\..\cognifitSocialFlex\src\media\games\moveTheBall\locale\ru_RU\ 
