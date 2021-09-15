using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PilMoney.Models
{
    public class LoginRequest
    {
       
        private string email;
        private string contraseña;

        public string Email { get => email; set => email = value; }
        public string Contraseña { get => contraseña; set => contraseña = value; }
    }
}