Add-Type -AssemblyName System.Drawing

$width = 1200
$height = 630
$bitmap = New-Object System.Drawing.Bitmap($width, $height)
$graphics = [System.Drawing.Graphics]::FromImage($bitmap)
$graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$graphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
$graphics.Clear([System.Drawing.Color]::FromArgb(7, 11, 10))

$gridPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(12, 210, 235, 226), 1)
for ($x = 0; $x -le $width; $x += 70) { $graphics.DrawLine($gridPen, $x, 0, $x, $height) }
for ($y = 0; $y -le $height; $y += 70) { $graphics.DrawLine($gridPen, 0, $y, $width, $y) }

$glowPath = New-Object System.Drawing.Drawing2D.GraphicsPath
$glowPath.AddEllipse(690, -170, 650, 650)
$glow = New-Object System.Drawing.Drawing2D.PathGradientBrush($glowPath)
$glow.CenterColor = [System.Drawing.Color]::FromArgb(80, 45, 215, 180)
$glow.SurroundColors = @([System.Drawing.Color]::FromArgb(0, 20, 70, 64))
$graphics.FillPath($glow, $glowPath)

$panelBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(215, 13, 20, 18))
$panelPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(90, 83, 221, 194), 2)
$panel = New-Object System.Drawing.Rectangle(64, 58, 1072, 514)
$graphics.FillRectangle($panelBrush, $panel)
$graphics.DrawRectangle($panelPen, $panel)

$accent = [System.Drawing.Color]::FromArgb(74, 215, 186)
$cyan = [System.Drawing.Color]::FromArgb(101, 201, 217)
$text = [System.Drawing.Color]::FromArgb(238, 244, 241)
$soft = [System.Drawing.Color]::FromArgb(177, 196, 190)
$muted = [System.Drawing.Color]::FromArgb(119, 142, 134)

$plusFont = New-Object System.Drawing.Font('Segoe UI', 62, [System.Drawing.FontStyle]::Bold)
$logoFont = New-Object System.Drawing.Font('Segoe UI', 54, [System.Drawing.FontStyle]::Bold)
$titleFont = New-Object System.Drawing.Font('Segoe UI', 54, [System.Drawing.FontStyle]::Bold)
$bodyFont = New-Object System.Drawing.Font('Segoe UI', 24, [System.Drawing.FontStyle]::Regular)
$labelFont = New-Object System.Drawing.Font('Consolas', 14, [System.Drawing.FontStyle]::Regular)
$pillFont = New-Object System.Drawing.Font('Segoe UI', 18, [System.Drawing.FontStyle]::Bold)

$accentBrush = New-Object System.Drawing.SolidBrush($accent)
$cyanBrush = New-Object System.Drawing.SolidBrush($cyan)
$textBrush = New-Object System.Drawing.SolidBrush($text)
$softBrush = New-Object System.Drawing.SolidBrush($soft)
$mutedBrush = New-Object System.Drawing.SolidBrush($muted)

$titleOne = [Text.Encoding]::UTF8.GetString([Convert]::FromBase64String('QUkt0LDQvdCw0LvQuNC3INC80LDRgtGH0LXQuQ=='))
$titleTwo = [Text.Encoding]::UTF8.GetString([Convert]::FromBase64String('0Lgg0J/Rg9C70YzRgSDRgNGL0L3QutCw'))
$subtitle = [Text.Encoding]::UTF8.GetString([Convert]::FromBase64String('0JrQvtC90YLQtdC60YHRgiwg0YDQuNGB0LrQuCDQuCDQtNCy0LjQttC10L3QuNGPINGA0YvQvdC60LAg4oCUINCyINC+0LTQvdC+0LwgVGVsZWdyYW0t0LHQvtGC0LU='))
$analysisLabel = [Text.Encoding]::UTF8.GetString([Convert]::FromBase64String('QUkt0LDQvdCw0LvQuNC3INC80LDRgtGH0LA='))
$pulseLabel = [Text.Encoding]::UTF8.GetString([Convert]::FromBase64String('0J/Rg9C70YzRgSDRgNGL0L3QutCw'))

$graphics.DrawString('+', $plusFont, $accentBrush, 102, 78)
$graphics.DrawString('AI', $logoFont, $textBrush, 180, 91)
$graphics.DrawString('TELEGRAM SPORT INTELLIGENCE', $labelFont, $cyanBrush, 884, 111)
$graphics.DrawLine($panelPen, 101, 184, 1098, 184)

$graphics.DrawString($titleOne, $titleFont, $textBrush, 103, 226)
$graphics.DrawString($titleTwo, $titleFont, $accentBrush, 103, 296)
$graphics.DrawString($subtitle, $bodyFont, $softBrush, 108, 392)

$pillBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(36, 74, 215, 186))
$pillPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(92, 74, 215, 186), 1)
$graphics.FillRectangle($pillBrush, 108, 468, 258, 54)
$graphics.DrawRectangle($pillPen, 108, 468, 258, 54)
$graphics.DrawString($analysisLabel, $pillFont, $textBrush, 130, 479)
$graphics.FillRectangle($pillBrush, 385, 468, 224, 54)
$graphics.DrawRectangle($pillPen, 385, 468, 224, 54)
$graphics.DrawString($pulseLabel, $pillFont, $textBrush, 407, 479)
$graphics.DrawString('plus-ai.site', $labelFont, $mutedBrush, 966, 492)

$output = Join-Path (Split-Path $PSScriptRoot -Parent) 'public\og-plus-ai.png'
$bitmap.Save($output, [System.Drawing.Imaging.ImageFormat]::Png)

$gridPen.Dispose()
$glow.Dispose()
$glowPath.Dispose()
$panelBrush.Dispose()
$panelPen.Dispose()
$plusFont.Dispose()
$logoFont.Dispose()
$titleFont.Dispose()
$bodyFont.Dispose()
$labelFont.Dispose()
$pillFont.Dispose()
$accentBrush.Dispose()
$cyanBrush.Dispose()
$textBrush.Dispose()
$softBrush.Dispose()
$mutedBrush.Dispose()
$pillBrush.Dispose()
$pillPen.Dispose()
$graphics.Dispose()
$bitmap.Dispose()

Write-Output $output
