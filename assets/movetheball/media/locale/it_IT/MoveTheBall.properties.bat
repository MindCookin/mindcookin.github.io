cd %~dp0
mxmlc -locale=it_IT -source-path="." -include-resource-bundles=MoveTheBall -output "MoveTheBall.properties.swf" 
copy MoveTheBall.properties.swf ..\..\..\..\..\cognifitSocialFlex\src\media\games\moveTheBall\locale\it_IT\ 
