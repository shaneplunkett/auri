{
  description = "A Nix-flake-based Go 1.22 development environment";

  inputs.nixpkgs.url = "https://flakehub.com/f/NixOS/nixpkgs/0.1";

  outputs =
    inputs:
    let
      goVersion = 23;

      supportedSystems = [
        "x86_64-linux"
        "aarch64-linux"
        "x86_64-darwin"
        "aarch64-darwin"
      ];

      forEachSupportedSystem =
        f:
        inputs.nixpkgs.lib.genAttrs supportedSystems (
          system:
          f {
            system = system;
            pkgs = import inputs.nixpkgs {
              inherit system;
              overlays = [ inputs.self.overlays.default ];
            };
          }
        );
    in
    {
      overlays.default = final: prev: {
        go = final."go_1_${toString goVersion}";
      };

      devShells = forEachSupportedSystem (
        { system, pkgs }:
        let
          isLinux = pkgs.stdenv.isLinux;
          isDarwin = pkgs.stdenv.isDarwin;
          platformDeps =
            with pkgs;
            [
              go
              wails
              upx
              gotools
              gopls
              gofumpt
              goimports-reviser
              golines
              typescript-language-server
              tailwindcss-language-server
              prettierd
              nodePackages.prettier
              nodePackages.eslint_d
              pnpm
            ]
            ++ (
              if isLinux then
                [
                  gtk3
                  pkg-config
                  webkitgtk_4_0
                  wl-clipboard
                ]
              else if isDarwin then
                [
                  # macOS-specific
                ]
              else
                [ ]
            );
        in
        {
          default = pkgs.mkShell {
            packages = platformDeps;
          };
        }
      );
    };
}
