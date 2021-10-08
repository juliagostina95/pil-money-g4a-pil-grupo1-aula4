using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PilMoney.Models
{
    public class LoginRequest
    {
        private string cuil;
        private string nombreCompleto;
        private string contraseña;

        public LoginRequest(string cuil, string nombreCompleto, string contraseña)
        {
            this.cuil = cuil;
            this.nombreCompleto = nombreCompleto;
            this.contraseña = contraseña;
        }
        public string CUIL { get => cuil; set => cuil = value; }
        public string NombreCompleto { get => nombreCompleto; set => nombreCompleto = value; }
        public string Contraseña { get => contraseña; set => contraseña = value; }
    }
}