cd %~dp0
mxmlc -locale=he_IL -source-path="." -include-resource-bundles=MoveTheBall -output "MoveTheBall.properties.swf"
copy MoveTheBall.properties.swf ..\..\..\..\..\cognifitSocialFlex\src\media\games\moveTheBall\locale\he_IL\ 
