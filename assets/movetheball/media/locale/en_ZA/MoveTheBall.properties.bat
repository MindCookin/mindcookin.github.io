cd %~dp0
mxmlc -locale=en_ZA -source-path="." -include-resource-bundles=MoveTheBall -output "MoveTheBall.properties.swf"
copy MoveTheBall.properties.swf ..\..\..\..\..\cognifitSocialFlex\src\media\games\moveTheBall\locale\en_ZA\ 
