cd %~dp0
mxmlc -locale=zh_HK -source-path="." -include-resource-bundles=MoveTheBall -output "MoveTheBall.properties.swf"
copy MoveTheBall.properties.swf ..\..\..\..\..\cognifitSocialFlex\src\media\games\moveTheBall\locale\zh_HK\ 
