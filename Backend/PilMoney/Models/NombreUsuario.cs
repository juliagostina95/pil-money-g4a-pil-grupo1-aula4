using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PilMoney.Models
{
    public class NombreUsuario
    {
        private string nombreCompleto;
        
        public NombreUsuario(string nombreCompleto)
        {
            this.nombreCompleto = nombreCompleto;
        }

        public string NombreCompleto { get => nombreCompleto; set => nombreCompleto = value; }
       
    }
}