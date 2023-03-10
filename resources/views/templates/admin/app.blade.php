<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>
        {{ isset($pageTitle) ? $pageTitle : "Title not set" }}
    </title>

    @isset($styles)

    @foreach ($styles as $style )

    <link rel="stylesheet" href="{{ $style }}">

    @endforeach

    @endisset

    @isset($scripts)

    @foreach ($scripts as $script )

    <script src="{{ $script }}" defer></script>

    @endforeach

    @endisset

    <script src="https://kit.fontawesome.com/67f918e73f.js" crossorigin="anonymous"></script>

</head>

<body>

    <div id="container">

        @yield("content")

    </div>

</body>

</html>