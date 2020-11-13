import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:music/theme/palette.dart';

ThemeData themeData(BuildContext context) => ThemeData(
      primaryColor: Palette.ACCENT_COLOR,
      visualDensity: VisualDensity.adaptivePlatformDensity,
      textTheme: GoogleFonts.karlaTextTheme(
        Theme.of(context).textTheme,
      ),
    );
